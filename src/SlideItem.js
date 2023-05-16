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
        <TouchableOpacity onPress={() => navigation.navigate('CarsDetail')}  style={styles.container}>
            <View style={styles.slidertop}>
            <Image source={require('./star.png')} style={{position:'absolute',top:10,left:10,width:30,height:30}} />
                <Text style={styles.description}>{item.title} </Text>
            </View>
            
            <View style={styles.slidercenter}>
                <Image style={{width:'80%',height:'70%'}} source={item.image} />
            </View>
            <View style={styles.sliderbottom}>
                <Text style={styles.description}>Arabayı İncele</Text>
                <Text style={{backgroundColor:'#000000',position:'absolute',bottom:0,right:0,color:'#ffffff',padding:10,paddingLeft:20,borderBottomRightRadius:10,borderTopLeftRadius:10}}>{item.price} TL/Gün</Text>
            </View>
        </TouchableOpacity>

    );
};

export default SlideItem;

const styles = StyleSheet.create({
    container: {
        width: width * 9 / 10,
        height: height * 2 / 5,
        alignItems: 'center',
        marginHorizontal: width / 40,
        marginTop: width / 10,
        borderRadius: 15,
        justifyContent:'center'
    }, slidertop: {
        width: '100%',
        height: '15%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#CDDBE9',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },  sliderbottom: {
        flexDirection:'row',
        width: '100%',
        height: '15%',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#CDDBE9',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    },
    slidercenter: {
        width: '100%',
        height: '60%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#CDDBE9',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    description: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
    },
});