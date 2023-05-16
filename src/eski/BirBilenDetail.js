import { StatusBar, Text, StyleSheet, FlatList,Dimensions, SafeAreaView, Image, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import DropShadow from "react-native-drop-shadow";
import ReplyCard from './ReplyCard';


class BirBilenDetail extends Component {


    replys = [
        {
            id: '1',
            name: 'Burak',
            questionid: 55,
            title: 'Bir anahtar firması ile iletişime geçebilirsin ',

        },
        {
            id: '2',
            name: 'Merve',
            questionid: 55,
            title: 'Bir anahtar  ',

        },
        {
            id: '3',
            name: 'Berk',
            questionid: 55,
            title: 'Bir anahtar  geçebilirsin ',

        },
        {
            id: '4',
            name: 'Berk',
            questionid: 55,
            title: ' geçebilirsin ',

        },
        {
            id: '5',
            name: 'Berk',
            questionid: 55,
            title: 'Niye ? ',

        }
    ];
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#FDCC03', alignItems: 'center' }} >
                <StatusBar animated={true} backgroundColor='black' />
                <DropShadow style={styles.shadowProp}>
                    <View style={{ width: '90%', height: '25%', borderRadius: 15, backgroundColor: 'white', marginTop: '5%' }}>
                        <View style={{ width: '80%', height: '25%', marginLeft: '12%', marginTop: '3%' }}><Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>Faruk Soruyor</Text></View>
                        <View style={{ width: '80%', height: '40%', marginLeft: '12%', backgroundColor: '#FDCC03', borderRadius: 20, justifyContent: 'center', alignItems: 'flex-start' }}><Text style={{ marginHorizontal: '5%', color: 'black', fontSize: 14 }}>Arabamın anahtarını kaybettim yenisini nasıl çıkarabilirim</Text></View>
                        <View style={{ width: '88%', height: '29%', marginLeft: '12%', flexDirection: 'row', }}>
                            <Image source={require('./eye.png')} style={{ position: 'absolute', left: '25%', bottom: '20%' }} />
                            <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold', position: 'absolute', left: '35%', bottom: '20%' }}>165</Text>
                            <Image source={require('./help.png')} style={{ position: 'absolute', left: 0, bottom: '20%' }} />
                            <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold', position: 'absolute', left: '10%', bottom: '20%' }}>2</Text>
                            <TouchableOpacity style={{ width: '50%', height: '75%', backgroundColor: 'black', position: 'absolute', right: 0, bottom: 0, alignItems: 'center', justifyContent: 'center', borderBottomRightRadius: 15, borderTopLeftRadius: 15 }}>
                                <Text style={{ color: '#FDCC03', fontSize: 16, fontWeight: 'bold' }}>Yanıt Ver</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <FlatList data={this.replys}
                    style={{width: '100%', height: '100%'}}
                        renderItem={({ item }) =>
                        <ReplyCard item={item}/>
                        
                            
                    }
                    />
               

                </DropShadow>
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
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
});
export default BirBilenDetail;