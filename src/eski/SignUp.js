import { SafeAreaView, ScrollView, Text, TouchableOpacity, View, StatusBar, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { TextInput } from 'react-native-paper'
import DropShadow from 'react-native-drop-shadow';

export default class SignUp extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
                <StatusBar animated={true} backgroundColor='black' />
                
                    <View style={{flex: 0.9,height: '100%', backgroundColor: '#FDCC03',flexDirection: 'column',borderRadius: 50,
                    }}>
                        <DropShadow style={styles.shadowProp}>
                            <TextInput
                                placeholderTextColor='#000'
                                placeholder="İsminizi ve Soyisminizi Giriniz."
                                underlineColor='#000'
                                selectionColor='#000'
                                activeUnderlineColor='#000'
                                mode="flat"
                                style={styles.input} />
                            <TextInput right={<TextInput.Icon icon="mail" />}
                                placeholderTextColor='#000'
                                placeholder="Nickname"
                                underlineColor='#000'
                                selectionColor='#000'
                                activeUnderlineColor='#000'
                                mode="flat"
                                style={styles.input} />
                            <TextInput right={<TextInput.Icon icon="eye" />}
                                placeholderTextColor='#000'
                                secureTextEntry
                                placeholder="Şifreniz"
                                underlineColor='#000'
                                selectionColor='#000'
                                activeUnderlineColor='#000'
                                mode="flat"
                                style={styles.input} />
                            <TextInput 
                            right={<TextInput.Icon icon="eye" />}
                                placeholderTextColor='#000'
                                secureTextEntry
                                placeholder="Şifrenizi Onaylayınız"
                                underlineColor='#000'
                                selectionColor='#000'
                                activeUnderlineColor='#000'
                                style={styles.input} />
                            <TextInput right={<TextInput.Icon icon="mail" />}
                                placeholderTextColor='#000'
                                placeholder="Mail Adresinizi Giriniz"
                                underlineColor='#000'
                                selectionColor='#000'
                                activeUnderlineColor='#000'
                                mode="flat"
                                style={styles.input} />
                            <TextInput right={<TextInput.Icon icon="mail" />}
                                placeholderTextColor='#000'
                                placeholder="Firma Adınızı Giriniz"
                                underlineColor='#000'
                                selectionColor='#000'
                                activeUnderlineColor='#000'
                                mode="flat"
                                style={styles.input} />
                            <View style={{ flexDirection: 'row', marginVertical: '2%' }}>
                                <Text style={{ color: '#000', marginTop: '2%' }}>Zaten bir hesabınız var ise </Text>
                                <TouchableOpacity style={{ backgroundColor: '#000', fontSize: 16, borderRadius: 10 }}><Text style={{ color: '#FDCC03', fontSize: 18, padding: 5, fontWeight: 'bold' }}>Giriş Yap</Text></TouchableOpacity>
                            </View>
                        </DropShadow>

                    </View>

                    <TouchableOpacity style={{ flex: 0.1, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#FDCC03', fontSize: 20, fontWeight: 'bold' }}>Kaydol</Text>
                    </TouchableOpacity>
                
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
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    input: {
        height: 45,
        width: '85%',
        backgroundColor: 'white',
        marginVertical: '2%',
    },
});