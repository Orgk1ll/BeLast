import { View, StatusBar, Text, StyleSheet, SafeAreaView, FlatList, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { Component } from 'react'
import DropShadow from "react-native-drop-shadow";
import Modal from "react-native-modal";



class BerlinEsnafSite extends Component {
    rehber = [
        {
            id: '1',
            title: 'Anket Sorusu',
            answer: [
                {
                    answerid: '1',
                    answertext: 'A',
                },
                {
                    answerid: '2',
                    answertext: 'B',
                },
                {
                    answerid: '3',
                    answertext: 'C',
                },
                {
                    answerid: '3',
                    answertext: 'D',
                }
            ]
        }
    ];
    state = {
        modalVisible: false,
    };


    render() {
        const { modalVisible } = this.state;

        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#FDCC03', flexDirection: 'column' }} >


                <StatusBar animated={true} backgroundColor='black' />

                <ScrollView style={{ flex: 1 }}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        isVisible={modalVisible}
                        style={{ height: '100%' }}
                        onRequestClose={() => {
                            this.setState({ modalVisible: !modalVisible });
                        }}>
                        <FlatList style={{
                            marginVertical: '30%', borderRadius: 30, backgroundColor: 'white'
                        }} contentContainerStyle={{ width: '100%', flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end' }}

                            data={this.rehber}
                            renderItem={({ item }) => (

                                <View style={{ minWidth: '100%', height: '100%', justifyContent: 'flex-start', alignItems: 'flex-end' }}>
                                    <TouchableOpacity onPress={() => this.setState({ modalVisible: !modalVisible })} style={{marginRight:'2%',marginTop:'2%', backgroundColor: 'red', width: '14%', height: '10%', justifyContent: 'center', alignItems: 'center', borderRadius: 50 }}>
                                        <Text style={{ color: 'black', fontSize: 26 }}>X</Text>
                                    </TouchableOpacity>
                                    <View style={{ width: '100%', height: '60%', marginTop: '20%', justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ color: 'black', fontSize: 26 }}>{item.title}</Text>
                                        <FlatList
                                            style={{marginTop:'20%', flexDirection: 'column',width:'100%',height:'100%',justifyContent:'space-around'}}
                                            data={item.answer}
                                           
                                            renderItem={({ item }) => (
                                                <View style={{width:'100%',height:'70%',alignItems:'center'}}>

                                                <TouchableOpacity style={{ backgroundColor: '#FDCC03', width: '80%', height: '40%', justifyContent: 'center', alignItems: 'flex-start', borderRadius: 30}}>
                                                    <Text style={{ color: 'black', fontSize: 20,marginLeft:'5%' }}>{item.answertext}</Text>
                                                </TouchableOpacity> 
                                                </View>
                                             )}   />


                                    </View>
                                </View>

                            )}
                            keyExtractor={item => item.id}
                        />

                    </Modal>

                    <View style={{ flex: 0.45, backgroundColor: 'black', width: 600, height: 400, marginLeft: -120, marginTop: -200, }}>
                        <ImageBackground source={require('./image1.jpg')}
                            style={{ flex: 1, opacity: 0.4, width: 600, height: 400, flexDirection: 'row', justifyContent: 'flex-end' }} >
                        </ImageBackground>
                    </View>

                    <View style={{ flex: 0.55, flexDirection: 'column', alignItems: 'flex-end' }}>
                        <DropShadow style={{
                            shadowOffset: { width: 6, height: 4 },
                            shadowColor: 'black',
                            shadowOpacity: 0.5,
                            shadowRadius: 5,
                            flex: 0.4,
                            width: '100%',
                            height: 60,
                            marginTop: '2%',
                            alignItems: 'center'
                        }}>
                            <TouchableOpacity onPress={() => this.setState({ modalVisible: !modalVisible })} style={{ flex: 1, backgroundColor: 'black', width: '92%', borderRadius: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <Image source={require('./anket.png')} style={{}} />
                                <Text style={{ marginLeft: '2%', fontSize: 20, color: '#FDCC03' }}>
                                    Anketimize Katılın
                                </Text>
                            </TouchableOpacity>

                        </DropShadow>

                        <View style={{ flex: 0.6, marginTop: '2%' }}>
                            <Text style={styles.text}>
                                Değerli Esnafımız ve değerli Berlinli hemserilerimiz.
                                Evet... Biz aslında bir esnaf sitesiyiz. Amacımız Esnaflığın gelismesi, enaflığı ekonimik, sosyal, özel ,  is hayatı olarak dahada ileriye taşımak. Esnafımızın dertlerine ortak olmak ve esnafımızın sesi olmak.  ama biz...  asıl amacımız, önceliğimiz esnaf da olasa,  Aynı zamanda bütün Berlinin, özelliklede bütün  yabancı kökenli  Berlinli hemsehrilerimizin de sesi solugu olmak, derlerine ortak olmak istiyoruz. Berlin esnaf B.E.S Olarak, sadece Berlinli esnafımımızın değil  Bütün  berlinli hemsehrilerimizin dertlerini, sorun larını paylastıkları ve çare aradıkları ortak bir  platform olmak istiyoruz.

                                Biz istiyoruz ki;  birlikte bir seyler yapalim . biz bizim icin, birseyler yapalım . Biz istiyo ruz ki.. biz birbirimiz icin bir seyler yapalim .

                                Biz istiyoruz ki.. Burda, BES de bulusalım hep.
                                Evet degerli Esnafimiz

                                BES gücünüze  güc katacak,

                                Hem esnafimizi derletlrini, problemlerini,

                                eksiklilklerini berlirleyip, birlikte cözümler arayacak, daha iyisi nasil olur arastiracak

                                Hem Esnafimizin hak hukukve ckarlarini korumaya caliacak,

                                her platformda sesinizi duyurmaya calisacak.

                                BES gerek is gerek özel hayatinizda her daim yaninizda olacak…

                                Bes’in sayfalarinda dolasirken..

                                müziginizi dinleyecek, berlinin havasini, trafigini ögreneceksiniz…

                                türkiyede dünyada neler oluryor ..

                                berlinde ekonomi nasil,, esnafne durumda ögreneceksiniz,

                                hemde oyunlariyle  egleneceksinz
                            </Text>
                        </View>

                    </View>

                </ScrollView>


            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    shadowProp: {


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
    text: {
        marginLeft: '2%',
        fontSize: 20,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
});
export default BerlinEsnafSite;