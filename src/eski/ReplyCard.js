import {
    StyleSheet,
    Text,
    View,
    Dimensions,
} from 'react-native';
import React from 'react';

const { width, height } = Dimensions.get('screen');

const SlideItem = ({ item }) => {

    return (
        <View style={styles.container}>
            <View style={styles.Photo}>
                <Text style={{ fontSize: 40, color: 'black', fontWeight: 'bold' }}>{Array.from(item.name)[0]}</Text>
                <Text style={{ fontSize: 12 , color: 'black', fontWeight: 'bold' }}>{item.name}</Text>
            </View>
            <View style={styles.Reply}>
                <Text style={{ fontSize: 16, color: 'black' }}>{item.title}</Text>
            </View>
        </View>

    );
};

export default SlideItem;

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height * 1 / 8,
        alignItems: 'center',
        marginTop: width / 20,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    Photo: {
        width: width * 4 / 20,
        height: height * 1 / 11,
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: 'white',
        alignItems: 'center'
    }, Reply: {
        width: width * 13 / 20,
        height: height * 1 / 9,
        alignItems: 'center',
        borderRadius: 15,
        marginLeft: width * 1 / 20,
        backgroundColor: 'white',
        justifyContent:'center',
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