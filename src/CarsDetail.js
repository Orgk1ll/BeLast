import { SafeAreaView, StatusBar, Text, TouchableOpacity, View, Image, StyleSheet, useWindowDimensions, ImageBackground, Picker } from 'react-native'
import React, { useState } from 'react';
import { TabView, SceneMap } from 'react-native-tab-view';


const FirstRoute = () => (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#f5f5f5' }}>
        <View style={{ backgroundColor: '#C9C9C9', width: '90%', flex: 0.3, borderRadius: 10, marginVertical: '3%' }}>
            <View style={{ width: '100%', flex: 0.3, backgroundColor: '#004AAD', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>MODEL</Text>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>YIL</Text>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>YAKIT</Text>
            </View>
            <View style={{ flex: 0.7, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                <Text style={{ color: 'black', fontWeight: 'normal', fontSize: 14 }}>A 180 AMG</Text>
                <Text style={{ color: 'black', fontWeight: 'normal', fontSize: 14 }}>2016</Text>
                <Text style={{ color: 'black', fontWeight: 'normal', fontSize: 14 }}>Benzin</Text>
            </View>
        </View>
        <View style={{ backgroundColor: '#C9C9C9', width: '90%', flex: 0.3, borderRadius: 10, marginVertical: '3%' }}>
            <View style={{ width: '100%', flex: 0.3, backgroundColor: '#004AAD', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>ŞANZIMAN</Text>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>KM</Text>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>SINIF</Text>
            </View>
            <View style={{ flex: 0.7, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                <Text style={{ color: 'black', fontWeight: 'normal', fontSize: 14 }}>Otomatik</Text>
                <Text style={{ color: 'black', fontWeight: 'normal', fontSize: 14 }}>15.000 KM</Text>
                <Text style={{ color: 'black', fontWeight: 'normal', fontSize: 14 }}>Premium</Text>
            </View>
        </View>
        <View style={{ backgroundColor: '#C9C9C9', width: '90%', flex: 0.3, borderRadius: 10, marginVertical: '3%' }}>
            <View style={{ width: '100%', flex: 0.3, backgroundColor: '#004AAD', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>KOLTUK</Text>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>BAGAJ</Text>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>MOTOR</Text>
            </View>
            <View style={{ flex: 0.7, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                <Text style={{ color: 'black', fontWeight: 'normal', fontSize: 14 }}>4 Kişilik</Text>
                <Text style={{ color: 'black', fontWeight: 'normal', fontSize: 14 }}>429 Lt</Text>
                <Text style={{ color: 'black', fontWeight: 'normal', fontSize: 14 }}>110 hp</Text>
            </View>
        </View>
    </View>

);

const SecondRoute = () => {
    const [selected, setSelected] = React.useState("");

    const data = [
        { key: '1', value: 'Merkez', },
        { key: '2', value: 'Selçuklu' },
        { key: '3', value: 'Meram' },
        { key: '4', value: 'Karatay' },
    ]
    return (
        <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
            <View style={{ flex: 0.9, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                
            </View>
            <View style={{flex:0.1,alignItems:'center',justifyContent:'flex-end',marginBottom:'2%'}}>
            <TouchableOpacity style={{width:'95%',height:40,backgroundColor:'#004AAD',borderRadius:20,alignItems:'center',justifyContent:'center'}}>
                <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Rezervasyonu Tamamla</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
};

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
});

export default function CarsDetail() {

    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Araba Detay' },
        { key: 'second', title: 'Rezervasyon' },
    ]);


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
            <StatusBar animated={true} backgroundColor='black' />
            <ImageBackground source={require('./car.png')} style={{ flex: 0.4, borderBottomRightRadius: 30 }} imageStyle={{ width: '90%', marginLeft: '5%' }}>
                <Image source={require('./star.png')}
                    style={{ width: 32, height: 32, position: 'absolute', right: 5 }} />
            </ImageBackground>

            <View style={{ flex: 1, backgroundColor: '#000', }}>
                <View style={{ flex: 0.15, backgroundColor: '#000', borderTopLeftRadius: 20, borderTopRightRadius: 20, borderBottomWidth: 2, borderColor: '#fff', marginTop: '-5%' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#fff' }}>900 TL</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff' }}>Mercedes-Benz A180</Text>
                            </View>
                        </View>

                    </View>
                </View>
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={{ width: layout.width }}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    shadowProp: {
        shadowOffset: { width: -6, height: 6 },
        shadowColor: 'black',
        shadowOpacity: 0.6,
        shadowRadius: 5,
        position: 'absolute',
        bottom: 20,
        right: 10,
    },
});
