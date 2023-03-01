
import { Image,Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Mainpage from './src/Mainpage';
import Rehber from './src/Rehber';
import Games from './src/Games';
import Advert from './src/Advert';
import Maps from './src/Map';
import Player from './src/Player';
import BerlinEsnafSite from './src/BerlinEsnafSite';
import BirBilen from './src/BirBilen';
import BirBilenDetail from './src/BirBilenDetail';
import Login from './src/Login';
import SignUp from './src/SignUp';
import DetailAdvert from './src/DetailAdvert';
import RehberDetay from './src/RehberDetay';
import Weather from './src/Weather';



const Stack = createNativeStackNavigator();


export default function App(navigation) {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Homes'>
                <Stack.Group screenOptions={{ headerStyle: { backgroundColor: '#000000' } }}>
                    <Stack.Screen name="Home" options={{ title: '', headerLeft: () => (<Image source={require('./src/logo.png')} style={{ width: 125, height: 22, resizeMode: 'stretch' }}></Image>) }} component={Mainpage} />
                    <Stack.Screen name="Weather" options={{ title: '', headerLeft: () => (<Image source={require('./src/logo.png')} style={{ width: 125, height: 22, resizeMode: 'stretch' }}></Image>) }} component={Weather} />
                    <Stack.Screen name="Signup" options={{ title: '', headerLeft: () => (<Image source={require('./src/logo.png')} style={{ width: 125, height: 22, resizeMode: 'stretch' }}></Image>), }} component={SignUp} />
                    <Stack.Screen name="Login" options={{ title: '', headerLeft: () => (<Image source={require('./src/logo.png')} style={{ width: 125, height: 22, resizeMode: 'stretch' }}></Image>) }} component={Login} />
                    <Stack.Screen name="RehberDetay" options={{ title: '', headerLeft: () => (<Image source={require('./src/logo.png')} style={{ width: 125, height: 22, resizeMode: 'stretch' }}></Image>) }} component={RehberDetay} />
                    <Stack.Screen name="DetailAdvert" options={{ title: '', headerLeft: () => (<Image source={require('./src/logo.png')} style={{ width: 125, height: 22, resizeMode: 'stretch' }}></Image>) }} component={DetailAdvert} />
                    <Stack.Screen name="Bir Bilen Detay" options={{ title: '', headerLeft: () => (<Image source={require('./src/logo.png')} style={{ width: 125, height: 22, resizeMode: 'stretch' }}></Image>) }} component={BirBilenDetail} />
                    <Stack.Screen name="Berlin Esnaf Site" options={{ title: '', headerLeft: () => (<Image source={require('./src/logo.png')} style={{ width: 125, height: 22, resizeMode: 'stretch' }}></Image>) }} component={BerlinEsnafSite} />
                    <Stack.Screen name="Bir Bilen" options={{ title: '', headerLeft: () => (<Image source={require('./src/logo.png')} style={{ width: 125, height: 22, resizeMode: 'stretch' }}></Image>) }} component={BirBilen} />
                    <Stack.Screen name="Game" options={{ title: '', headerLeft: () => (<Image source={require('./src/logo.png')} style={{ width: 125, height: 22, resizeMode: 'stretch' }}></Image>) }} component={Games} />
                    <Stack.Screen name="Player" options={{ title: '', headerLeft: () => (<Image source={require('./src/logo.png')} style={{ width: 125, height: 22, resizeMode: 'stretch' }}></Image>) }} component={Player} />
                    <Stack.Screen name="Map" options={{ title: '', headerLeft: () => (<Image source={require('./src/logo.png')} style={{ width: 125, height: 22, resizeMode: 'stretch' }}></Image>) }} component={Maps} />
                    <Stack.Screen name="Advert" options={{ title: '', headerLeft: () => (<Image source={require('./src/logo.png')} style={{ width: 125, height: 22, resizeMode: 'stretch' }}></Image>) }} component={Advert} />
                    <Stack.Screen name="Rehber" options={{ title: '', headerLeft: () => (<Image source={require('./src/logo.png')} style={{ width: 125, height: 22, resizeMode: 'stretch' }}></Image>) }} component={Rehber} />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>

    )
}
