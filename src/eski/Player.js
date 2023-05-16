import { Image, View, StatusBar, StyleSheet, SafeAreaView, TouchableOpacity, FlatList } from 'react-native'
import React, { Component, useState } from 'react'
import DropShadow from "react-native-drop-shadow";
import { Text, TextInput } from 'react-native-paper';
import axios from 'axios';


class Player extends Component {

    music = {
    }

  
       


    searchMusic = async () => {
        options = {
            method: 'GET',
            url: 'https://youtube-media-downloader.p.rapidapi.com/v2/search/videos',
            params: { keyword: 'gulsen' },
            headers: {
                'X-RapidAPI-Key': '243e0c302emsha149a3fa93f4a82p1b4c90jsn2d0c7d5c52c3',
                'X-RapidAPI-Host': 'youtube-media-downloader.p.rapidapi.com'
            }
        };
        axios.request(options).then((response) => {
           
            this.setState({music: response.data}, function () {
                console.log('musics',this.state.music);
            });


        }).catch(function (error) {
            console.error("error", error);
        });
    }

    rehber = [
        {
            id: '1',
            name: 'Neşet Ertaş',
            image: require('./nesetertas.png'),
            title: 'Gönül Dağı'

        }, {
            id: '2',
            name: 'ames hype & tita lau',
            image: require('./disconnected.jpg'),
            title: 'Disconnected'

        }, {
            id: '3',
            name: 'Club Remix',
            image: require('./music.jpg'),
            title: 'Mix'

        },

    ];
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#FDCC03', flexDirection: 'column' }} >

                <StatusBar animated={true} backgroundColor='black' />

                <View style={{ flex: 1 }}>
                    <View style={{ flex: 0.1, justifyContent: 'center', marginTop: 10 }}>
                        <DropShadow style={styles.searchShadowProp}>
                            <TextInput right={<TextInput.Icon icon="magnify" />}
                                placeholder="Arama" underlineColor='transparent' selectionColor='black' activeUnderlineColor='transparent' mode="flat" style={{ width: '92%', height: 40, borderRadius: 50, borderTopLeftRadius: 50, borderTopRightRadius: 50 }} />
                        </DropShadow>
                    </View>
                    <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: 10 }}>
                        <DropShadow style={{
                            shadowOffset: { width: 6, height: 6 },
                            shadowColor: 'black',
                            shadowOpacity: 0.4,
                            shadowRadius: 5,
                            flex: 1,
                            width: '100%',
                            alignItems: 'center',
                        }}>
                            <TouchableOpacity onPress={() => { this.searchMusic() }} style={{ justifyContent: 'center', alignItems: 'center', width: '92%', height: 40, backgroundColor: 'black', borderRadius: 40 }}>
                                <Text style={{ color: '#FDCC03', fontSize: 16, fontWeight: 'bold' }}> Sonuçları Görüntüle</Text>
                            </TouchableOpacity>
                        </DropShadow>
                    </View>
                    <View style={{ flex: 0.84 }}>
                        <DropShadow style={styles.shadowProp}>
                            <FlatList style={{
                                width: '100%'
                            }} contentContainerStyle={{ justifyContent: "center", alignItems: "center", }}

                                data={this.rehber}
                                renderItem={({ item }) => (
                                    <View style={{ marginBottom: '5%', backgroundColor: 'white', width: '92%', height: 120, borderRadius: 20, flexDirection: 'row' }}>
                                        <View style={{ flex: 0.35, justifyContent: 'center', alignItems: 'center' }}>
                                            <DropShadow style={{
                                                shadowOffset: { width: 6, height: 2 },
                                                shadowColor: 'black',
                                                shadowOpacity: 0.5,
                                                shadowRadius: 5, width: '100%', height: '100%', backgroundColor: 'transparent', borderRadius: 20, alignItems: 'center', justifyContent: 'center'
                                            }}>

                                                <Image source={item.image} resizeMode='cover' style={{ width: '100%', height: '100%', borderRadius: 20 }} />

                                            </DropShadow>
                                        </View>
                                        <View style={{ flex: 0.65, flexDirection: 'column', marginLeft: '5%' }}>
                                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                                <View style={{ flex: 0.7, flexDirection: 'column', justifyContent: 'center' }}>
                                                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.name}</Text>
                                                    <Text style={{ fontSize: 16, color: 'gray' }}>{item.title}</Text>
                                                </View>
                                                <TouchableOpacity style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center' }}>
                                                    <Image source={require('./playericon.png')} resizeMode='contain' />
                                                </TouchableOpacity>
                                            </View>

                                        </View>

                                    </View>

                                )}
                                keyExtractor={item => item.id}
                            />
                        </DropShadow>
                    </View>

                </View>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    shadowProp: {
        shadowOffset: { width: 6, height: -4 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        flex: 1


    },
    searchShadowProp: {
        shadowOffset: { width: 6, height: 6 },
        shadowColor: 'black',
        shadowOpacity: 0.4,
        shadowRadius: 5,
        justifyContent: 'space-around',
        flexDirection: 'column',
        alignItems: 'center',

    },
});
export default Player;