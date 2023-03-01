import { Image, FlatList, VirtualizedList, View, StatusBar, StyleSheet, SafeAreaView, Text, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React, { Component } from 'react'
import DropShadow from "react-native-drop-shadow";
import SlideItem from './SlideItem';


class BirBilen extends Component {
    width = Dimensions.get('window').width;
    birbilen = [
        {
            id: '1',
            name: 'Faruk',
            answercount: 53,
            title: 'Nasıl Yapılır ? ',

        },
        {
            id: '2',
            name: 'Merve',
            answercount: 24,
            title: 'Nasıl Olur ? ',

        },
        {
            id: '3',
            name: 'Berk',
            answercount: 63,
            title: 'Niye ? ',

        },
        {
            id: '4',
            name: 'Berk',
            answercount: 38,
            title: 'Niye ? ',

        },
        {
            id: '5',
            name: 'Berk',
            answercount: 87,
            title: 'Niye ? ',

        },
        {
            id: '6',
            name: 'Berk',
            answercount: 123,
            title: 'Niye ? ',

        },
        {
            id: '7',
            name: 'Berk',
            answercount: 89,
            title: 'Niye ? ',

        }
    ];
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#FDCC03', flexDirection: 'column' }} >

                <StatusBar animated={true} backgroundColor='black' />

                <View style={{ flex: 1 }}>

                    <View style={{ flex: 0.5, backgroundColor: 'black', width: 600, height: 400, marginLeft: -100, marginTop: -100, borderBottomLeftRadius: 450, borderBottomRightRadius: 220 }}>
                        <Image source={require('./image1.jpg')}
                            style={{ flex:1,opacity: 0.4, width: 600, height: 400, borderBottomLeftRadius: 450, borderBottomRightRadius: 220 }} />
                    </View>
                    <DropShadow style={styles.shadowProp}>

                        <FlatList data={this.birbilen}
                            renderItem={({ item }) =>
                                <SlideItem item={item} />}

                        />
                    </DropShadow>

                </View>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    shadowProp: {
        shadowOffset: { width: 6, height: 6 },
        shadowColor: 'black',
        shadowOpacity: 0.4,
        shadowRadius: 5,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop:'5%',
        flex:0.5
    },
});
export default BirBilen;