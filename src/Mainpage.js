import { Image, FlatList, View, StatusBar, StyleSheet, SafeAreaView, Text, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React, { Component, useState } from 'react'
import DropShadow from "react-native-drop-shadow";
import { List } from 'react-native-paper';
import SlideItem from './SlideItem';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Modal from "react-native-modal";





class Mainpage extends Component {
  width = Dimensions.get('window').width;
  birbilen = [
    {
      id: '1',
      name: 'Faruk',
      answercount: 53,
      title: 'Nasıl Yapılır ? ',

    },
    {
      id: '2',
      name: 'Merve',
      answercount: 24,
      title: 'Nasıl Olur ? ',

    },
    {
      id: '3',
      name: 'Berk',
      answercount: 63,
      title: 'Niye ? ',

    },
    {
      id: '4',
      name: 'Berk',
      answercount: 38,
      title: 'Niye ? ',

    },
    {
      id: '5',
      name: 'Berk',
      answercount: 87,
      title: 'Niye ? ',

    },
    {
      id: '6',
      name: 'Berk',
      answercount: 123,
      title: 'Niye ? ',

    },
    {
      id: '7',
      name: 'Berk',
      answercount: 89,
      title: 'Niye ? ',

    }
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
    const { modalVisible } = this.state;

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#FDCC03', flexDirection: 'column', justifyContent: 'center' }} >

        <StatusBar animated={true} backgroundColor='black' />

        <Modal
          animationType="slide"
          transparent={true}
          isVisible={modalVisible}
          style={{ height: '100%', }}
          onRequestClose={() => {
            this.setState({ modalVisible: !modalVisible });
          }}>
          <View style={{ width: '100%', height: '70%', backgroundColor: 'white',borderRadius:20, justifyContent: 'flex-start', alignItems: 'flex-end' }}>
            <TouchableOpacity onPress={() => this.setState({ modalVisible: !modalVisible })} style={{ marginRight: '2%', marginTop: '2%', backgroundColor: 'red', width: 40, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 50 }}>
              <Text style={{ color: 'black', fontSize: 26 }}>X</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <ScrollView style={{ flex: 1 }}>


          <View style={{ flex: 0.3, backgroundColor: 'black', width: 600, height: 400, marginLeft: -100, marginTop: -100, borderBottomLeftRadius: 450, borderBottomRightRadius: 220 }}>
            <Image source={require('./image1.jpg')}
              style={{ flex: 1, opacity: 0.4, width: 600, height: 400, borderBottomLeftRadius: 450, borderBottomRightRadius: 220 }} />
          </View>
          <DropShadow style={styles.shadowProp}>
            <TouchableOpacity onPress={() => this.props.navigation.push('Weather')} style={styles.button}>
              <Image source={require('./weather.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.push('Map')} style={styles.button}>
              <Image source={require('./traffic.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.push('Game')} style={styles.button}>
              <Image source={require('./games.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.push('Player')} style={styles.button}>
              <Image source={require('./music.png')} />
            </TouchableOpacity>
          </DropShadow>
          <DropShadow style={styles.shadowProp}>
            <TouchableOpacity onPress={() => this.props.navigation.push('Berlin Esnaf Site')} style={{
              backgroundColor: '#FDCC03',
              width: '95%',
              height: 150,
              borderRadius: 40,
              justifyContent: 'flex-start',
              alignItems: 'flex-end',
              flexDirection: 'column'
            }}>
              <View style={{ flex: 1, width: '100%', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
                <Image source={require('./team.png')} style={{ marginLeft: '15 %' }} />
                <View style={{ flexDirection: 'column', flex: 0.8, alignItems: 'center', justifyContent: 'center', marginLeft: '15%' }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black', }}>BERLİN ESNAF</Text>
                  <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black', }}>SİTESİ</Text>
                </View>

              </View>
              <View style={styles.biggerbuttonbottompanel}>
                <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#FDCC03' }}>İncele</Text>
              </View>
            </TouchableOpacity>
          </DropShadow>
          <DropShadow style={styles.shadowProp}>
            <TouchableOpacity onPress={() => this.props.navigation.push('Rehber')} style={styles.biggerbutton}>
              <Image source={require('./book.png')} style={{ marginBottom: '20%' }} />
              <View style={styles.biggerbuttonbottompanel}>
                <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#FDCC03' }}>Rehber</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.push('Advert')} style={styles.biggerbutton}>
              <Image source={require('./sale.png')} style={{ marginBottom: '20%' }} />
              <View style={styles.biggerbuttonbottompanel}>
                <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#FDCC03' }}>İlan</Text>
              </View>
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
            <TouchableOpacity onPress={() => this.props.navigation.push('Bir Bilen')} style={{ backgroundColor: 'black', flex: 0.2, width: '120%', height: 50, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#FDCC03', marginVertical: 5 }}>BİR BİLEN</Text>
            </TouchableOpacity>
            <FlatList data={this.birbilen} horizontal
              renderItem={({ item }) => <SlideItem item={item} />}
            />
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
            <View style={{ flex: 1, width: '98%' }} >
              <List.Section title="AKTÜELLER" style={{ backgroundColor: 'transparent' }}>
                <List.Accordion
                  title="Esnaf Aktüel"
                  titleStyle={{ color: '#FDCC03' }}
                  expanded={this.state.expanded}
                  onPress={this._handlePress}
                  style={{ backgroundColor: 'black' }}
                >
                  <List.Item title="First item" titleStyle={{ color: '#FDCC03' }} style={{ backgroundColor: 'black' }} />
                </List.Accordion>
              </List.Section>
              <List.Section>
                <List.Accordion
                  title="Berlin Aktüel"
                  titleStyle={{ color: '#FDCC03' }}
                  expanded={this.state.expanded}
                  onPress={this._handlePress}
                  style={{ backgroundColor: 'black' }}
                >
                  <List.Item title="First item" titleStyle={{ color: '#FDCC03' }} style={{ backgroundColor: 'black' }} />
                </List.Accordion>
              </List.Section>
              <List.Section>
                <List.Accordion
                  title="Almanya Aktüel"
                  titleStyle={{ color: '#FDCC03' }}
                  expanded={this.state.expanded}
                  onPress={this._handlePress}
                  style={{ backgroundColor: 'black' }}
                >
                  <List.Item title="First item" titleStyle={{ color: '#FDCC03' }} style={{ backgroundColor: 'black' }} />
                </List.Accordion>
              </List.Section>
              <List.Section>
                <List.Accordion
                  title="Türkiye Aktüel"
                  titleStyle={{ color: '#FDCC03' }}
                  expanded={this.state.expanded}
                  onPress={this._handlePress}
                  style={{ backgroundColor: 'black' }}
                >
                  <List.Item title="First item" titleStyle={{ color: '#FDCC03' }} style={{ backgroundColor: 'black' }} />
                </List.Accordion>
              </List.Section>
              <List.Section>
                <List.Accordion
                  title="Avrupa Aktüel"
                  titleStyle={{ color: '#FDCC03' }}
                  expanded={this.state.expanded}
                  onPress={this._handlePress}
                  style={{ backgroundColor: 'black' }}
                >
                  <List.Item title="First item" titleStyle={{ color: '#FDCC03' }} style={{ backgroundColor: 'black' }} />
                </List.Accordion>
              </List.Section>
            </View>
          </DropShadow>
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
    backgroundColor: '#FDCC03',
    width: 75,
    height: 75,
    borderRadius: 200,
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