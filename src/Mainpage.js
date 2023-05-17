import { Image, FlatList, View, StatusBar, StyleSheet, SafeAreaView, Text, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React, { Component, useState } from 'react'
import DropShadow from "react-native-drop-shadow";
import { List } from 'react-native-paper';
import SlideItem from './SlideItem';
import { createNativeStackNavigator } from '@react-navigation/native-stack';





class Mainpage extends Component {
  width = Dimensions.get('window').width;
  birbilen = [
    {
      id: '1',
      title: 'Mercedes-Benz A180 ',
      image: require('./car.png'),
      price:'900'
    },
    {
      id: '2',
      title: 'Fiat Egea',
      image: require('./car1.png'),
      price:'700'
    },
    {
      id: '3',
      title: 'Ford Torneo',
      image: require('./car5.png'),
      price:'500'
    },
    
  ];
  state = {
    expanded: true,
    modalVisible: true

  }

  _handlePress = () =>
    this.setState({
      expanded: !this.state.expanded
    });


  render(navigation) {

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f5f5', flexDirection: 'column', justifyContent: 'center' }} >

        <StatusBar animated={true} backgroundColor='#000000' />

        <ScrollView style={{ flex: 1 }}>


          <View style={{ flex: 0.4, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('./arkaplan.png')}
              style={{ flex: 1, width: '100%', height: 250, marginLeft: -10 }} />
          </View>
          <View style={{ flex: 0.6 }}>

            <DropShadow style={styles.shadowProp}>
              <TouchableOpacity onPress={() => this.props.navigation.push('Profil')} style={{
                backgroundColor: '#ffffff',
                width: '95%',
                height: 90,
                borderRadius: 20,
                justifyContent: 'flex-start',
                alignItems: 'flex-end',
                flexDirection: 'column'
              }}>
                <View style={{ flex: 1, width: '100%', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
                  <View style={{ flexDirection: 'column', flex: 0.8, alignItems: 'center', justifyContent: 'center', marginLeft: '15%' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black', }}>Levent Civcik</Text>
                  </View>
                  <Image source={require('./profil.png')} style={{ marginLeft: '15 %',width:60,height:60,borderRadius:10 }} />
                </View>
              </TouchableOpacity>
            </DropShadow>
            <DropShadow style={styles.shadowProp}>
              <TouchableOpacity onPress={() => this.props.navigation.push('Cars')} style={styles.button}>
              <Text style={{color:'black',fontWeight:'500'}}>Sedan</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.push('Cars')} style={styles.button}>
              <Text style={{color:'black',fontWeight:'500'}}>Hatchback</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.push('Cars')} style={styles.button}>
              <Text style={{color:'black',fontWeight:'500'}}>Suv</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.push('Cars')} style={styles.button}>
              <Text style={{color:'black',fontWeight:'500'}}>Ticari</Text>
              </TouchableOpacity>
            </DropShadow>
            <DropShadow style={{
              shadowOffset: { width: 6, height: 6 },
              shadowColor: 'black',
              shadowOpacity: 0.4,
              shadowRadius: 5,
              justifyContent: 'space-around',
              alignItems: 'center',
              flexDirection: 'column',
              paddingTop: 20,
              paddingHorizontal: 10,
              flex: 0.3,
              width: '100%'
            }}>
              <TouchableOpacity onPress={() => this.props.navigation.push('Cars')} style={{ backgroundColor: '#004AAD', flex: 0.2, width: '120%', height: 50, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#ffffff', marginVertical: 5 }}>ARABALAR</Text>
              </TouchableOpacity>
              <FlatList data={this.birbilen} horizontal
                renderItem={({ item }) => <SlideItem item={item} />}
              />
            </DropShadow>     
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  shadowProp: {
    flex: 0.3,
    shadowOffset: { width: 6, height: 6 },
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowRadius: 5,
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingTop: 20,
    paddingHorizontal: 10,
    width: '100%',
    height: '20%',
  },
  button: {
    backgroundColor: '#ffffff',
    width: 85,
    height: 35,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }, biggerbutton: {
    backgroundColor: '#FDCC03',
    width: '45%',
    height: 150,
    borderRadius: 40,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'column'
  }, answerbutton: {
    backgroundColor: 'black',
    width: 170,
    height: 140,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 25
  },
  biggerbuttonbottompanel: {
    backgroundColor: 'black',
    width: '100%',
    height: 30,
    borderBottomLeftRadius: 55,
    borderBottomRightRadius: 55,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
export default Mainpage;