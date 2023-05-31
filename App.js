
import { Image,Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Mainpage from './src/Mainpage';
import Login from './src/Login';
import Cars from './src/Cars';
import CarsDetail from './src/CarsDetail';
<<<<<<< HEAD
=======
import Profil from './src/Profil';
>>>>>>> 8a39b02d0bbd2144127e7e89ecbcc67de67ee2f3



const Stack = createNativeStackNavigator();


export default function App(navigation) {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Homes'>
<<<<<<< HEAD
                <Stack.Group screenOptions={{ headerStyle: { backgroundColor: '#F2F2F2' } }}>
                    <Stack.Screen name="Home" options={{ title: '', headerLeft: () => (<Image source={require('./src/logo.png')} style={{ width: 90, height: 50, resizeMode: 'stretch' }}></Image>) }} component={Mainpage} />
                    <Stack.Screen name="Login" options={{ title: '', headerLeft: () => (<Image source={require('./src/logo.png')} style={{ width: 90, height: 50, resizeMode: 'stretch' }}></Image>) }} component={Login} />
                    <Stack.Screen name="CarsDetail" options={{ title: '', headerLeft: () => (<Image source={require('./src/logo.png')} style={{ width: 90, height: 50, resizeMode: 'stretch' }}></Image>) }} component={CarsDetail} />
                     <Stack.Screen name="Cars" options={{ title: '', headerLeft: () => (<Image source={require('./src/logo.png')} style={{ width: 90, height: 50, resizeMode: 'stretch' }}></Image>) }} component={Cars} />
=======
                <Stack.Group screenOptions={{ headerStyle: { backgroundColor: '#f5f5f5' } }}>
                    <Stack.Screen name="Home" options={{ title: '', headerLeft: () => (<Image source={require('./src/logo.png')} style={{ width: 90, height: 50, resizeMode: 'stretch' }}></Image>) }} component={Mainpage} />
                    <Stack.Screen name="Login" options={{ title: '', headerLeft: () => (<Image source={require('./src/logo.png')} style={{ width: 90, height: 50, resizeMode: 'stretch' }}></Image>) }} component={Login} />
                    <Stack.Screen name="CarsDetail" options={{ title: '', headerLeft: () => (<Image source={require('./src/logo.png')} style={{ width: 90, height: 50, resizeMode: 'stretch' }}></Image>) }} component={CarsDetail} />
                    <Stack.Screen name="Cars" options={{ title: '', headerLeft: () => (<Image source={require('./src/logo.png')} style={{ width: 90, height: 50, resizeMode: 'stretch' }}></Image>) }} component={Cars} />
                    <Stack.Screen name="Profil" options={{ title: '', headerLeft: () => (<Image source={require('./src/logo.png')} style={{ width: 90, height: 50, resizeMode: 'stretch' }}></Image>) }} component={Profil} />
>>>>>>> 8a39b02d0bbd2144127e7e89ecbcc67de67ee2f3
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>

    )
}
