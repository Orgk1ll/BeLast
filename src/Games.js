import { Image, View, StatusBar, StyleSheet, SafeAreaView, TouchableOpacity, FlatList } from 'react-native'
import React, { Component } from 'react'
import DropShadow from "react-native-drop-shadow";
import { Text, TextInput } from 'react-native-paper';


class Games extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#FDCC03', flexDirection: 'column' }} >

        <StatusBar animated={true} backgroundColor='black' />

        <View style={{ flex: 1 }}>
          <View style={{ flex: 0.45, backgroundColor: 'black', width: 600, height: 400, marginLeft: -120, marginTop: -200, borderBottomLeftRadius: 400, borderBottomRightRadius: 220 }}>
            <Image source={require('./image1.jpg')}
              style={{ flex: 1, opacity: 0.4, width: 600, height: 400, borderBottomLeftRadius: 400, borderBottomRightRadius: 220 }} />
          </View>
          <View style={{ flex: 0.08, justifyContent: 'center' }}>
            <DropShadow style={styles.searchShadowProp}>
              <TextInput right={<TextInput.Icon icon="magnify" />}
                placeholder="Arama" underlineColor='transparent' selectionColor='black' activeUnderlineColor='transparent' mode="flat" style={{ width: '92%', height: 40, borderRadius: 50, borderTopLeftRadius: 50, borderTopRightRadius: 50 }} />
            </DropShadow>

          </View>
          <View style={{ flex: 0.47 }}>
            <DropShadow style={styles.shadowProp}>
              <TouchableOpacity style={{ backgroundColor: 'white', width: '80%', flex: 0.48, borderRadius: 30, marginBottom: '3%' }}>
                <View style={{ flex: 0.6, alignItems: 'center', justifyContent: 'flex-end' }}>
                  <Image source={require('./sudoku.png')} resizeMode='contain' style={{ flex: 1, width: 100, height: 100 }} />

                </View>
                <View style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ fontSize: 20, fontWeight: 'bold' }}>SUDOKU</Text>
                </View>
                <View style={{ flex: 0.2, justifyContent: 'flex-end', flexDirection: 'row' }}>
                  <View style={{ justifyContent: 'center', backgroundColor: '#FDCC03', flex: 0.45, borderBottomRightRadius: 30, borderTopLeftRadius: 30, alignItems: 'center' }} >
                    <Text style={{ fontSize: 18 }}>Oyna</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ backgroundColor: 'white', width: '80%', flex: 0.48, borderRadius: 30 }}>
                <View style={{ flex: 0.6, alignItems: 'center', justifyContent: 'flex-end' }}>
                  <Image source={require('./cardgame.png')} resizeMode='contain' style={{ flex: 1, width: 100, height: 100 }} />

                </View>
                <View style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ fontSize: 20, fontWeight: 'bold' }}>KART OYUNU</Text>
                </View>
                <View style={{ flex: 0.2, justifyContent: 'flex-end', flexDirection: 'row' }}>
                  <View style={{ justifyContent: 'center', backgroundColor: '#FDCC03', flex: 0.45, borderBottomRightRadius: 30, borderTopLeftRadius: 30, alignItems: 'center' }} >
                    <Text style={{ fontSize: 18 }}>Oyna</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </DropShadow>
          </View>

        </View>
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  shadowProp: {
    shadowOffset: { width: 6, height: -4 },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flex: 1


  },
  searchShadowProp: {
    shadowOffset: { width: 6, height: 6 },
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowRadius: 5,
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'center',

  },
});
export default Games;