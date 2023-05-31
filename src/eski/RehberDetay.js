import { Image, View, StatusBar, StyleSheet, SafeAreaView, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { Component } from 'react'
import DropShadow from "react-native-drop-shadow";
import { Text, TextInput } from 'react-native-paper';


class Advert extends Component {
    rehber = [
        {
            premium: true,
            id: '1',
            header: 'TOGG',
            title: 'Sahibinden az kullanılmış togg marka araç',
            price: '36.500',
            bgcolor: 'purple',
            titlecolor: 'red',
            titlebgcolor: 'white',
            headerbgcolor: 'blue',
            headercolor: 'orange',

            image: require('./image2.png'),
            statement: [
                {
                    statementeid: '1',
                    statementtext: '15000 KM',
                    statementcolor: 'yellow'
                },
                {
                    statementeid: '2',
                    statementtext: 'OTOMATİK',
                    statementcolor: 'yellow'

                },
                {
                    statementeid: '3',
                    statementtext: 'ELEKTRİK',
                    statementcolor: 'yellow'

                },
            ]

        },
        {
            premium: false,
            id: '2',
            header: 'TOGG',
            title: 'Sahibinden az kullanılmış togg marka araç',
            price: '34.500',
        },
        {
            premium: true,
            id: '3',
            header: 'TOGG',
            title: 'Sahibinden az kullanılmış togg marka araç',
            price: '34.500',
            bgcolor: 'red',
            titlecolor: 'black',
            titlebgcolor: 'white',
            headerbgcolor: 'pink',
            headercolor: 'black',

            image: require('./image2.png'),
            statement: [
                {
                    statementeid: '1',
                    statementtext: '15000 KM',
                    statementcolor: 'yellow'
                },
                {
                    statementeid: '2',
                    statementtext: 'OTOMATİK',
                    statementcolor: 'yellow'

                },
                {
                    statementeid: '3',
                    statementtext: 'ELEKTRİK',
                    statementcolor: 'yellow'

                },
            ]

        },
        {
            premium: false,
            id: '4',
            header: 'TOGG',
            title: 'Sahibinden az kullanılmış togg marka araç',
            price: '34.500',
        },

    ];
    AltBaslik=[
        {
            altbaslikid: '1',
            altbasliktext: 'Araba',
          },
          {
            altbaslikid: '2',
            altbasliktext: 'Parça',
          },
          {
            altbaslikid: '3',
            altbasliktext: 'Lastik',
          },
          {
            altbaslikid: '4',
            altbasliktext: 'Motor',
          },
          {
            altbaslikid: '5',
            altbasliktext: 'Kaporta',
          },
          {
            altbaslikid: '6',
            altbasliktext: 'Boya',
          }
    ];
    
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#FDCC03', flexDirection: 'column' }} >

                <StatusBar animated={true} backgroundColor='black' />

                <View style={{ flex: 1 ,}}>
                    <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center' }}>
                        <TextInput
                            right={<TextInput.Icon icon="magnify" />}
                            placeholder="Arama" underlineColor='transparent' selectionColor='black' activeUnderlineColor='transparent' mode="flat" style={{ width: '92%', height: 40, borderRadius: 50, borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
                        />
                    </View>
                    <View style={{flex:0.1,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                        <FlatList
                            style={{ flexWrap: 'wrap', flexDirection: 'column' ,flex:1,backgroundColor:'#000',paddingVertical:'2%',borderRadius:20,marginHorizontal:'5%'}}
                            numColumns={2}
                            data={this.AltBaslik}
                            renderItem={({ item }) => (

                                <View style={{ width: '50%',alignItems: 'center' }}>
                                    <Text style={{ color: '#FDCC03' }}>{item.altbasliktext}</Text>
                                </View>)} />
                    </View>
                    <View style={{ flex: 0.9, justifyContent: 'flex-start',marginTop:'5%' }}>
                        <DropShadow style={styles.shadowProp}>
                            <FlatList contentContainerStyle={{ flexDirection: 'column' }}
                                style={{ width: '85%', height: '100%' }}
                                data={this.rehber}
                                renderItem={({ item }) => (<ScrollView style={{ flex: 1 }}>
                                    {item.premium ?
                                        <TouchableOpacity onPress={() => this.props.navigation.push('DetailAdvert')} style={{ width: '100%', height: 300, flexDirection: 'column', backgroundColor: item.bgcolor, borderRadius: 20 }}>

                                            <View style={{ flex: 0.4, alignItems: 'center', flexDirection: 'row', marginTop: '2%' }}>
                                                <View style={{ flex: 0.9, width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                                    <Image source={item.image} resizeMode='cover' style={{ width: '50%', height: '100%', borderRadius: 20, marginLeft: '13%', }} />
                                                </View>
                                                <View style={{ flex: 0.1, width: '100%', marginRight: '2%', height: '100%', alignItems: 'center', justifyContent: 'flex-start' }}>
                                                    <Image source={require('./premium.png')} resizeMode='cover' style={{ width: 28, height: 28 }} />
                                                </View>

                                            </View>
                                            <View style={{ flex: 0.15, alignItems: 'center', justifyContent: 'center', backgroundColor: item.headerbgcolor }}>
                                                <Text style={{ fontWeight: 'bold', fontSize: 28, color: item.headercolor }}>{item.header}</Text>
                                            </View>
                                            <View style={{ flex: 0.15, alignItems: 'center', justifyContent: 'center', backgroundColor: item.titlebgcolor }}>
                                                <Text style={{ fontWeight: 'bold', fontSize: 14, color: item.titlecolor }}>{item.title}</Text>
                                            </View>
                                            <View style={{ flex: 0.15, alignItems: 'center', justifyContent: 'center' }}>
                                                <FlatList
                                                    style={{ flexWrap: 'wrap', flexDirection: 'row' }}
                                                    numColumns={3}
                                                    data={item.statement}
                                                    renderItem={({ item }) => (

                                                        <View style={{ width: '33%', alignItems: 'center' }}>
                                                            <Text style={{ color: item.statementcolor, marginTop: '5%', fontWeight: '700' }}>{item.statementtext}</Text>
                                                        </View>)} />
                                            </View>
                                            <View style={{ flex: 0.15, alignItems: 'flex-end', justifyContent: 'flex-end', flexDirection: 'row' }}>
                                                <View style={{ backgroundColor: 'black', width: '45%', height: '100%', borderBottomRightRadius: 20, borderTopLeftRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
                                                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 24 }}>{item.price} €</Text>
                                                </View>
                                            </View>


                                        </TouchableOpacity> :
                                        <TouchableOpacity onPress={() => this.props.navigation.push('DetailAdvert')} style={{ marginVertical: 15, width: '100%', height: 100, flexDirection: 'row', backgroundColor: 'white', borderRadius: 20 }}>
                                            <View style={{ flex: 0.35, justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 24 }}>{item.header}</Text>
                                            </View>
                                            <View style={{ flex: 0.65, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                                <View style={{ flex: 0.8, justifyContent: 'center', alignItems: 'flex-start' }}>
                                                    <Text style={{ color: 'black', fontSize: 16 }}>{item.title}</Text>
                                                </View>
                                                <View style={{ flex: 0.2, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end', width: '100%' }}>
                                                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '65%', height: '100%', backgroundColor: '#FDCC03', borderBottomRightRadius: 20, borderTopLeftRadius: 30 }}>
                                                        <Text style={{ color: 'black', fontSize: 14 }}>{item.price} €</Text>
                                                    </View>

                                                </View>

                                            </View>
                                        </TouchableOpacity>}

                                </ScrollView>


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
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 1


    },
    searchShadowProp: {
        shadowOffset: { width: 6, height: 6 },
        shadowColor: 'black',
        shadowOpacity: 0.4,
        shadowRadius: 5,
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EEC003',
        flex: 1,

    },
});
export default Advert;