import { Image, View, StatusBar, StyleSheet, SafeAreaView, TouchableOpacity, FlatList, ImageBackground } from 'react-native'
import React, { Component } from 'react'
import DropShadow from "react-native-drop-shadow";
import { Text, TextInput } from 'react-native-paper';
import { blue100 } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import WeatherCard from './WeatherCard';


class Weather extends Component {
    weatherstatus = [
        {
            id: '1',
            heat: '31.4',
            situation: 'Parçalı Bulutlu',
            day: 'Pazartesi',
        },{
            id: '2',
            heat: '55',
            situation: 'Güneşli',
            day: 'Salı',
        },{
            id: '3',
            heat: '28.5',
            situation: 'Yağmurlu',
            day: 'Çarşamba',
        },{
            id: '4',
            heat: '33.4',
            situation: 'Parçalı Bulutlu',
            day: 'Perşembe',
        }
    ]

    render() {
        return (
            <SafeAreaView style={{ flex: 1, flexDirection: 'column' }} >

                <StatusBar animated={true} backgroundColor='black' />
                <View style={{ flex: 0.4, backgroundColor: 'black' }}>
                    <Image source={require('./image1.jpg')}
                        style={{ flex: 3, opacity: 0.4, width: 600 }} />
                </View>
                <View style={{ flex: 0.7, borderTopLeftRadius: 40, borderTopRightRadius: 40, backgroundColor: 'rgba(255,255,255,0.3)', marginTop: '-15%', borderTopWidth: 15, borderColor: 'rgba(255,255,255,0.3)' }}>
                    <View style={{ flex: 1, }}>
                        <ImageBackground source={require('./berlin.png')} style={{ flex: 1, height: 700 }} imageStyle={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}>
                            <View style={{ flex: 0.5, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ flex: 0.7, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginBottom: '-10%' }}>
                                    <Text style={{ fontSize: 64, fontWeight: 'normal', color: '#fff' }}>10.4</Text>
                                    <Image source={require('./fahrenheit.png')} style={{ width: 32, height: 32, marginBottom: '5%' }} />
                                </View>
                                <View style={{ flexDirection: 'row', flex: 0.3 }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginRight: '5%' }}>
                                        <Image source={require('./damp.png')} style={{ width: 32, height: 32 }} />
                                        <Text style={{ fontSize: 16, color: '#fff', marginTop: '5%' }}> 79%</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginRight: '5%' }}>
                                        <Image source={require('./karlı.png')} style={{ width: 32, height: 32 }} />
                                        <Text style={{ fontSize: 16, color: '#fff', marginTop: '5%' }}> Karlı</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginRight: '5%' }}>
                                        <Image source={require('./wind.png')} style={{ width: 32, height: 32 }} />
                                        <Text style={{ fontSize: 16, color: '#fff', marginTop: '5%' }}> 2mph</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ flex: 0.5, justifyContent: 'center' }}>

                                <View style={{ width: '100%', height: 160, backgroundColor: 'rgba(255,255,255,0.3)' }}>
                                    <FlatList data={this.weatherstatus} horizontal
                                        renderItem={({ item }) => <WeatherCard item={item} />}
                                    />
                                </View>
                            </View>

                </ImageBackground>
            </View>
                </View >


            </SafeAreaView >
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
export default Weather;