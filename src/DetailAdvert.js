import { SafeAreaView, StatusBar, Text, TouchableOpacity, View, Image, StyleSheet, useWindowDimensions ,ImageBackground} from 'react-native'
import React  from 'react'
import DropShadow from 'react-native-drop-shadow';
import { TabView,SceneMap } from 'react-native-tab-view';


const FirstRoute = () => (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#FDCC03' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}>Açıklama</Text>
                    <Text style={{ fontSize: 16, fontWeight: 'normal', color: '#000', maxWidth: '92%' }}>Düzenli bakımları yapılmıştır.Lastikler mevsimlik 0 ayarında Good Year.Akü geçen ay yenilendi Bosch.Muayene bitiş 01/2024MTV - Ocak ödendi. 567,54TL Satışa hazır. Ceza rehin vs yoktur.Çocuktan dolayı SUV araca geçeceğimizden (satış nedeni de budur) 2018 ve üstü, düşük km.li temiz,otomatik, üzerine makul bir rakam verebileceğim SUV araçlarla takas olabilir. Harici takas düşünülmez.</Text>
                    <DropShadow style={styles.shadowProp}>
                        <TouchableOpacity style={{ width: 60, height: 60, backgroundColor: '#EEC003', borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('./like.png')}
                                style={{ width: 28, height: 28, }} />
                        </TouchableOpacity>
                    </DropShadow>
                </View>

);

const SecondRoute = () => (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#FDCC03' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}>Özelikler</Text>
                    <Text style={{ fontSize: 16, fontWeight: 'normal', color: '#000', maxWidth: '92%' }}>2011 Model - 184hp - 1.6 - cooper S - 114.175km - Benzinli – Otomatik- kırmızı & siyah- cam tavan sunroof- F1 direksiyon-kumandalı egzoz sistemi-

Tramer 3379TL. Alırken yaptırmış olduğum exper raporu ve 5664 sonuç resmi görsellerde mevcut. O tarihten bu yana ufak çizik v.s dışında herhangi bir kazaya karışmamıştır.</Text>
                    <DropShadow style={styles.shadowProp}>
                        <TouchableOpacity style={{ width: 60, height: 60, backgroundColor: '#EEC003', borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('./like.png')}
                                style={{ width: 28, height: 28, }} />
                        </TouchableOpacity>
                    </DropShadow>
                </View>
);

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
});

export default function DetailAdvert() {

    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Açıklama' },
        { key: 'second', title: 'Özelik' },
    ]);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
            <StatusBar animated={true} backgroundColor='black' />
            <ImageBackground source={require('./ilan.jpg')}style={{flex: 0.4, borderBottomRightRadius: 30 }} imageStyle={{width: '100%' }}>
                    <Image source={require('./premium.png')}
                    style={{width:32,height:32,position:'absolute',right:5 }} />
                    </ImageBackground>

            <View style={{ flex: 1, backgroundColor: '#000', }}>
                <View style={{ flex: 0.15, backgroundColor: '#000', borderTopLeftRadius: 20, borderTopRightRadius: 20, borderBottomWidth: 2, borderColor: '#fff', marginTop: '-5%' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#FDCC03' }}>22.500 $</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff' }}>Konya / Karatay / Fetih Mahallesi</Text>
                            </View>
                        </View>
                        <Image source={require('./eye.png')}
                            style={{ width: 24, height: 24, position: 'absolute', right: 8, top: 5 }} />
                        <Text style={{ position: 'absolute', right: 10, top: 25, fontSize: 16, color: '#fff' }} >23</Text>
                    </View>
                </View>
                    <TabView
                        navigationState={{ index, routes }}
                        renderScene={renderScene}
                        onIndexChange={setIndex}
                        initialLayout={{ width: layout.width }}
                    />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    shadowProp: {
        shadowOffset: { width: -6, height: 6 },
        shadowColor: 'black',
        shadowOpacity: 0.6,
        shadowRadius: 5,
        position: 'absolute',
        bottom: 20,
        right: 10
    },
});
