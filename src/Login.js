import { SafeAreaView, StatusBar, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { Component } from 'react'
import { Checkbox, TextInput } from 'react-native-paper'

export default class Login extends Component {
    state = {
        checked: false,
    };
    render() {
        const { checked } = this.state;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar animated={true} backgroundColor='black' />
                <View style={{ flex: 0.9, backgroundColor: 'black', borderBottomLeftRadius: 280, }}>
                    <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('./login.png')}
                            style={{ width: '60%', height: 80, }} />
                    </View>
                    <View style={{ flex: 0.7, justifyContent: 'space-around', alignItems: 'center' }}>
                        <TextInput right={<TextInput.Icon icon="mail" />}
                            placeholderTextColor='#fff' placeholder="Mail adresinizi girin" underlineColor='#fff' selectionColor='#FDCC03' activeUnderlineColor='#FDCC03' mode="flat" style={{ width: '85%', height: 50, backgroundColor: 'transparent',marginTop:'-20%' }} />
                        <TextInput right={<TextInput.Icon icon="eye" />}
                            placeholderTextColor='#fff' placeholder="Şifrenizi girin" underlineColor='#fff' selectionColor='#FDCC03' activeUnderlineColor='#FDCC03' mode="password" style={{ width: '85%', height: 50, backgroundColor: 'transparent', marginTop:'-20%' }} />

                        <View style={{ flexDirection:'row', justifyContent: 'space-around',marginTop:'-30%'}}>
                        <Checkbox
                            checked={checked}
                            onPress={() => { this.setState({ checked: !checked }); }}
                        />
                                <Text style={{ color: '#f5f5f5',marginLeft:10,marginRight:50,marginTop:'2%' }}>Beni hatırla</Text>
                        
                            <TouchableOpacity style={{ marginTop:'2%' }}>
                                <Text style={{ color: '#f5f5f5' }}>Şifremi unuttum</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={{ backgroundColor: '#FDCC03', width: '50%', height: '10%', borderRadius: 40, alignItems: 'center', justifyContent: 'center',marginTop:'-20%' }}>
                            <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}>Giriş Yap</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 0.1, marginLeft: '-20%' }}>
                    <TouchableOpacity style={{ backgroundColor: '#FDCC03', borderRadius: 200, height: 300, width: 300, justifyContent: 'center', flexDirection: 'row' }}>
                        <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', marginTop: '7%' }}>Kaydol</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}