import { Text, View,SafeAreaView,StatusBar,ImageBackground,Image,TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class Profil extends Component {
  render() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f5f5', flexDirection: 'column' }} >

            <StatusBar animated={true} backgroundColor='black' />
            <View style={{ flex: 0.3 }}>
                <ImageBackground source={require('./arkaplan2.png')}
                    style={{ flex: 1, width: '100%', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', marginBottom: '10%' }} >Profil</Text>
                </ImageBackground>
            </View>
            <View style={{ flex: 0.2, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#C7C7C7' }}>
                <View style={{ width: 110, height: 110, backgroundColor: '#004AAD', borderRadius: 600, marginTop: '-10%', justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('./profil.png')} style={{ width: 100, height: 100, borderRadius: 60 }} />
                </View>
                <Text style={{ color: 'black', fontSize: 20, fontWeight: '500', }} >Levent Civcik</Text>
                <Text style={{ color: '#474545', fontSize: 14, fontWeight: '500', }} >GetCar 4 yıllık tecrübeli üye</Text>
            </View>
            <View style={{ flex: 0.1, justifyContent: 'flex-start', alignItems: 'center' }}>
                <Text style={{ color: '#004AAD', fontSize: 18, fontWeight: '500', marginTop: '2%' }} >Kiralanan Arçlar</Text>
            </View>
            <View style={{ flex: 0.3, justifyContent: 'space-around', flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => this.props.navigation.push('CarsDetail')} style={{ width: '45%', height: 220, backgroundColor: '#474545', alignItems: 'center', borderRadius: 10 }}>
                    <Image source={require('./car.png')} style={{ width: '90%', height: '40%' }} />
                    <Text style={{ color: 'white', fontSize: 14, fontWeight: '500', marginVertical: '2%' }} >Mercedes-Benz A180</Text>
                    <Text style={{ color: 'white', fontSize: 12, fontWeight: '500', marginVertical: '2%' }} >05/04/2023 - 08/04/2023</Text>
                    <Text style={{ color: 'white', fontSize: 12, fontWeight: '500', marginTop: '2%' }} >Tarihleri Arasında 3 Gün Kiralanmıştır </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.push('CarsDetail')} style={{ width: '45%', height: 220, backgroundColor: '#474545', alignItems: 'center', borderRadius: 10 }}>
                    <Image source={require('./car1.png')} style={{ width: '90%', height: '40%' }} />
                    <Text style={{ color: 'white', fontSize: 14, fontWeight: '500', marginVertical: '2%' }} >Fiat Egea</Text>
                    <Text style={{ color: 'white', fontSize: 12, fontWeight: '500', marginVertical: '2%' }} >14/10/2022 - 14/01/2023</Text>
                    <Text style={{ color: 'white', fontSize: 12, fontWeight: '500', marginTop: '2%' }} >Tarihleri Arasında 2 Ay Kiralanmıştır </Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 0.1, justifyContent: 'space-around', flexDirection: 'row',marginTop:'5%' }}>
                <TouchableOpacity onPress={() => this.props.navigation.push('Login')} style={{ width: '45%', height: 50, backgroundColor: '#004AAD', alignItems: 'center', borderRadius: 10,justifyContent:'center' }}>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: '500', marginVertical: '2%' }} >Giriş Yap</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.push('Login')} style={{ width: '45%', height: 50, backgroundColor: '#6C0808', alignItems: 'center', borderRadius: 10 ,justifyContent:'center'}}>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: '500', marginVertical: '2%' }} >Çıkış Yap</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
  }
}