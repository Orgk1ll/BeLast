import {
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';


const { width, height } = Dimensions.get('screen');


const SlideItem = ({ item }) => {

navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Bir Bilen Detay')}  style={styles.container}>
            <View style={styles.slidertop}>
                <Text style={styles.description}>{item.name} Soruyor</Text>
            </View>
            
            <View style={styles.slidercenter}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black',position:'absolute', top:0,right:27}}>
                {item.answercount}
                </Text>
                <Image source={require('./answer.png')} style={{position:'absolute',top:0,right:2}} />
                <Text style={styles.title}>{item.title}</Text>
            </View>
            <View style={styles.sliderbottom}>
                <Text style={styles.description}>Cevapları İncele</Text>
            </View>
        </TouchableOpacity>

    );
};

export default SlideItem;

const styles = StyleSheet.create({
    container: {
        width: width * 2 / 3,
        height: height * 2 / 5,
        alignItems: 'center',
        marginHorizontal: width / 20,
        marginTop: width / 10,
        borderRadius: 15
    }, slidertop: {
        width: '100%',
        height: '15%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },  sliderbottom: {
        width: '100%',
        height: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    },
    slidercenter: {
        width: '100%',
        height: '60%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FDCC03',
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