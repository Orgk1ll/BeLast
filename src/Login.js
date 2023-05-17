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
            <SafeAreaView style={{ flex: 1,backgroundColor:'black' }}>
                <StatusBar animated={true} backgroundColor='#f5f5f5' />
                <View style={{ flex: 0.9, backgroundColor: '#f5f5f5', borderBottomLeftRadius: 280, }}>
                    <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('./logo.png')}
                            style={{ width: '60%', height: 100, }} />
                    </View>
                    <View style={{ flex: 0.7, justifyContent: 'space-around', alignItems: 'center' }}>
                        <TextInput right={<TextInput.Icon icon="mail" />}
                            placeholderTextColor='#000' placeholder="Mail adresinizi girin" underlineColor='#004AAD' selectionColor='#004AAD' activeUnderlineColor='#004AAD' mode="flat" style={{ width: '85%', height: 50, backgroundColor: 'transparent',marginTop:'-20%' }} />
                        <TextInput right={<TextInput.Icon icon="eye" />}
                            placeholderTextColor='#000' placeholder="Şifrenizi girin" underlineColor='#004AAD' selectionColor='#004AAD' activeUnderlineColor='#004AAD' mode="password" style={{ width: '85%', height: 50, backgroundColor: 'transparent', marginTop:'-20%' }} />

                        <View style={{ flexDirection:'row', justifyContent: 'space-around',marginTop:'-30%'}}>
                        <Checkbox
                            checked={checked}
                            onPress={() => { this.setState({ checked: !checked }); }}
                        />
                                <Text style={{ color: '#000',marginLeft:10,marginRight:50,marginTop:'2%' }}>Beni hatırla</Text>
                        
                            <TouchableOpacity style={{ marginTop:'2%' }}>
                                <Text style={{ color: '#000' }}>Şifremi unuttum</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => this.props.navigation.push('Home')} style={{ backgroundColor: '#004AAD', width: '50%', height: '10%', borderRadius: 40, alignItems: 'center', justifyContent: 'center',marginTop:'-20%' }}>
                            <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>Giriş Yap</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 0.1, marginLeft: '-20%' }}>
                    <TouchableOpacity style={{ backgroundColor: '#004AAD', borderRadius: 200, height: 300, width: 300, justifyContent: 'center', flexDirection: 'row' }}>
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', marginTop: '7%' }}>Kaydol</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}