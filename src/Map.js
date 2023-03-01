import { Image, View, StatusBar, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import DropShadow from "react-native-drop-shadow";
import { Text, TextInput } from 'react-native-paper';
import MapView from 'react-native-maps';

export class Maps extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#FDCC03', flexDirection: 'column' }} >

                <StatusBar animated={true} backgroundColor='black' />

                <View style={{ flex: 1 }}>
                    <View style={{ flex: 0.44, backgroundColor: 'black', width: 600, height: 400, marginLeft: -120, marginTop: -200, borderBottomLeftRadius: 400, borderBottomRightRadius: 220 }}>
                        <Image source={require('./image1.jpg')}
                            style={{ flex: 1, opacity: 0.4, width: 600, height: 400, borderBottomLeftRadius: 400, borderBottomRightRadius: 220 }} />
                    </View>
                    <View style={{ flex: 0.08, justifyContent: 'center' }}>
                        <DropShadow style={styles.searchShadowProp}>
                            <TextInput right={<TextInput.Icon icon="magnify" />}
                                placeholder="Nereden" underlineColor='transparent' selectionColor='black' activeUnderlineColor='transparent' mode="flat" style={{ width: '46%', height: 40, borderRadius: 50, borderTopLeftRadius: 50, borderTopRightRadius: 50 }} />
                            <TextInput right={<TextInput.Icon icon="magnify" />}
                                placeholder="Nereye" underlineColor='transparent' selectionColor='black' activeUnderlineColor='transparent' mode="flat" style={{ width: '46%', height: 40, borderRadius: 50, borderTopLeftRadius: 50, borderTopRightRadius: 50 }} />
                        </DropShadow>

                    </View>
                    <View style={{ flex: 0.06, justifyContent: 'center', alignItems: 'center',width:'100%'}}>
                        <DropShadow style={{
                            shadowOffset: { width: 6, height: 6 },
                            shadowColor: 'black',
                            shadowOpacity: 0.4,
                            shadowRadius: 5,
                            flex:1,
                            width:'100%',
                            alignItems:'center',
                        }}>
                            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center',width:'96%', height: '100%', flex: 1, backgroundColor: 'black', marginBottom: '3%', borderRadius: 40 }}>
                                <Text style={{ color: '#FDCC03', fontSize: 16, }}> Sonuçları Görüntüle</Text>
                            </TouchableOpacity>
                        </DropShadow>
                    </View>
                    <View style={{ flex: 0.42,alignItems:'center',justifyContent:'center' }}>
                        <DropShadow style={styles.shadowProp}>
                        <MapView
                            currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
                            enableZoomControl={true}
                            showsUserLocation={false}
                            showsMyLocationButton={false}

                            style={{ width:'100%', flex:1,borderTopLeftRadius:20}}
                            region={{
                                latitude: 37.78825,
                                longitude: -122.4324,
                                latitudeDelta: 0.002,
                                longitudeDelta: 0.002,
                            }}

                            pitchEnabled={true}
                            showsCompass={true}
                            liteMode={false}
                            showsBuildings={true}
                            showsTraffic={true}
                            showsIndoors={true}
                        >


                        </MapView>
                        </DropShadow>
                    </View>

                </View>
            </SafeAreaView>

        )
    }
}
const styles = StyleSheet.create({
    shadowProp: {
       
        
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'column',
        width:'85%',
        height:'100%',
        backgroundColor:'red',      
        borderRadius: 10, 


    },
    searchShadowProp: {
        shadowOffset: { width: 6, height: 6 },
        shadowColor: 'black',
        shadowOpacity: 0.4,
        shadowRadius: 5,
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',

    },
});

export default Maps