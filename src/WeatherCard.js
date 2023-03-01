import {
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import React from 'react';

const { width, height } = Dimensions.get('screen');

const WeatherCard = ({ item }) => {

    return (
        <TouchableOpacity style={styles.container}>
            <View style={{ width: '100%', height: '90%',  justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('./cloudy.png')} style={{ width: 48, height: 48 }} />
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 16, color: '#FDCC03' }}>{item.heat}</Text>
                    <Image source={require('./fahrenheit.png')} style={{ width: 12, height: 12, marginTop: '1%' }} />
                </View>
                <Text style={{ fontSize: 16, color: '#fff' }}>{item.day}</Text>
                <Text style={{ fontSize: 16, color: '#fff' }}>{item.situation}</Text>
            </View>


        </TouchableOpacity>

    );
};

export default WeatherCard;

const styles = StyleSheet.create({
    container: {
        width: width * 2 / 5,
        height: height / 6,
        alignItems: 'center',
        marginHorizontal: width / 20,
        marginTop:height/80,
        backgroundColor: 'rgba(31,45,85,0.9)',
        borderRadius: 10
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    description: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FDCC03',
    },
});