import { Image, View, StatusBar, StyleSheet, SafeAreaView, TouchableOpacity, FlatList,ScrollView } from 'react-native'
import React, { Component } from 'react'
import DropShadow from "react-native-drop-shadow";
import { Text, TextInput } from 'react-native-paper';


class Cars extends Component {
    arablar = [
        {
            id: '1',
            header: 'Mercedes-Benz A180',
            price: '900',
            image: require('./car.png'),
            statement: [
                {
                    statementeid: '1',
                    statementtext: '15.001 KM',
                },
                {
                    statementeid: '2',
                    statementtext: 'Otomatik',

                },
                {
                    statementeid: '3',
                    statementtext: 'Benzin',

                },
                {
                    statementeid: '4',
                    statementtext: '4 Kişilik',
                },
                {
                    statementeid: '5',
                    statementtext: '3 Bavul',

                },
                {
                    statementeid: '6',
                    statementtext: '21+ Yaş',
                },
            ]

        },
        {
            id: '2',
            header: 'Mercedes-Benz A180',
            price: '500',
            image: require('./car1.png'),
            statement: [
                {
                    statementeid: '1',
                    statementtext: '150.000 KM',
                },
                {
                    statementeid: '2',
                    statementtext: 'Manuel',

                },
                {
                    statementeid: '3',
                    statementtext: 'Dizel',

                },
                {
                    statementeid: '4',
                    statementtext: '5 Kişilik',
                },
                {
                    statementeid: '5',
                    statementtext: '5 Bavul',

                },
                {
                    statementeid: '6',
                    statementtext: '20+ Yaş',
                },
            ]

        },
       

    ];
    render(navigation) {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f5f5', flexDirection: 'column' }} >

                <StatusBar animated={true} backgroundColor='black' />

                <View style={{ flex: 1 }}>
                    <View style={{ flex: 0.35, }}>
                        <Image source={require('./arkaplan.png')}
                            style={{  flex: 1, width: '103%', height: 200,marginLeft:-10 }} />
                    </View>
                    <View style={{ flex: 0.1, justifyContent: 'center' }}>
                        <DropShadow style={styles.searchShadowProp}>
                            <TextInput right={<TextInput.Icon icon="magnify" />}
                                placeholder="Arama" underlineColor='transparent' selectionColor='black' activeUnderlineColor='transparent' mode="flat" style={{ width: '92%', height: 40, borderRadius: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10,backgroundColor:'#ffffff' }} />
                        </DropShadow>
                    </View>
                    <View style={{ flex: 0.55, justifyContent: 'flex-start' }}>
                        <DropShadow style={styles.shadowProp}>
                            <FlatList contentContainerStyle={{ flexDirection: 'column' }}
                                style={{ width: '85%', height: '100%' }}
                                data={this.arablar}
                                renderItem={({ item }) => (<ScrollView style={{flex:1}}> 
                                
                                <TouchableOpacity onPress={() => this.props.navigation.push('CarsDetail')} style={{ width: '100%', height: 300, flexDirection: 'column', backgroundColor:'#CDDBE9', borderRadius: 20 ,marginTop:'10%'}}>
                                        
                                <View style={{ flex: 0.4, alignItems: 'center', flexDirection: 'row', marginTop: '2%' }}>
                                    <View style={{ flex: 0.9, width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                        <Image source={item.image} resizeMode='cover' style={{ width: '80%', height: '100%', marginLeft: '13%', }} />
                                    </View>
                                    <View style={{ flex: 0.1, width: '100%', marginRight: '2%', height: '100%', alignItems: 'center', justifyContent: 'flex-start' }}>
                                        <Image source={require('./star.png')} resizeMode='cover' style={{ width: 28, height: 28 }} />
                                    </View>

                                </View>
                                <View style={{ flex: 0.15, alignItems: 'center', justifyContent: 'center', }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 28, color:'#000000' }}>{item.header}</Text>
                                </View>
                                
                                <View style={{ flex: 0.30, alignItems: 'center', justifyContent: 'center' }}>
                                    <FlatList
                                        style={{ flexWrap: 'wrap', flexDirection: 'row' }}
                                        numColumns={3}
                                        data={item.statement}
                                        renderItem={({ item }) => (

                                            <View style={{ width: '33%', alignItems: 'center' }}>
                                                <Text style={{ color:'#000', marginTop: '5%', fontWeight: '700' }}>{item.statementtext}</Text>
                                            </View>)} />                                          
                                </View>
                                <View style={{ flex: 0.15, alignItems: 'flex-end', justifyContent: 'flex-end', flexDirection: 'row' }}>
                                    <View style={{ bottom:0,right:0,backgroundColor: 'black', width: '45%', height: '100%', borderBottomRightRadius: 20, borderTopLeftRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 24 }}>{item.price} TL</Text>
                                    </View>
                                </View>


                            </TouchableOpacity> 
                             
                                    
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
        flexDirection: 'column',
        alignItems: 'center',

    },
});
export default Cars;