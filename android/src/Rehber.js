import { Image, View, StatusBar, StyleSheet, SafeAreaView, TouchableOpacity, FlatList } from 'react-native'
import React, { Component } from 'react'
import DropShadow from "react-native-drop-shadow";
import { Text, TextInput } from 'react-native-paper';


class Rehber extends Component {
  rehber = [
    {
      id: '1',
      title: 'GASTRONOMİ',
      image: require('./cooking.png'),
      statement: [
        {
          statementeid: '1',
          statementtext: 'Mutfak',
        },
        {
          statementeid: '2',
          statementtext: 'Yemek',
        },
        {
          statementeid: '3',
          statementtext: 'Catering',
        },
        {
          statementeid: '3',
          statementtext: 'Catering',
        }
      ]

    }, {
      id: '2',
      title: 'SAĞLIK',
      image: require('./health.png'),
      
      statement: [
        {
          statementeid: '1',
          statementtext: 'Mutfak',
        },
        {
          statementeid: '2',
          statementtext: 'Yemek',
        },
        {
          statementeid: '3',
          statementtext: 'Catering',
        },
        {
          statementeid: '3',
          statementtext: 'Catering',
        }
      ]

    },
    {
      id: '3',
      title: 'OTOMOTİV',
      image: require('./auto.png'),

      statement: [
        {
          statementeid: '1',
          statementtext: 'Mutfak',
        },
        {
          statementeid: '2',
          statementtext: 'Yemek',
        },
        {
          statementeid: '3',
          statementtext: 'Catering',
        },
        {
          statementeid: '3',
          statementtext: 'Catering',
        }
      ]

    }, {
      id: '4',
      title: 'İNŞAAT',
      image: require('./build.png'),
      statement: [
        {
          statementeid: '1',
          statementtext: 'Mutfak',
        },
        {
          statementeid: '2',
          statementtext: 'Yemek',
        },
        {
          statementeid: '3',
          statementtext: 'Catering',
        },
        {
          statementeid: '3',
          statementtext: 'Catering',
        }
      ]

    },
    {
      id: '5',
      title: 'BÜROKRATİ',
      image: require('./burokratie.png'),
      statement: [
        {
          statementeid: '1',
          statementtext: 'Mutfak',
        },
        {
          statementeid: '2',
          statementtext: 'Yemek',
        },
        {
          statementeid: '3',
          statementtext: 'Catering',
        },
        {
          statementeid: '3',
          statementtext: 'Catering',
        }
      ]

    },
    {
      id: '6',
      title: 'HİZMET',
      image: require('./service.png'),
      statement: [
        {
          statementeid: '1',
          statementtext: 'Mutfak',
        },
        {
          statementeid: '2',
          statementtext: 'Yemek',
        },
        {
          statementeid: '3',
          statementtext: 'Catering',
        },
        {
          statementeid: '3',
          statementtext: 'Catering',
        }
      ]

    }

  ];
  render(navigation) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#FDCC03', flexDirection: 'column' }} >

        <StatusBar animated={true} backgroundColor='black' />

        <View style={{ flex: 1 }}>
          <View style={{ flex: 0.50, backgroundColor: 'black', width: 600, height: 400, marginLeft: -120, marginTop: -200, borderBottomLeftRadius: 400, borderBottomRightRadius: 220 }}>
            <Image source={require('./image1.jpg')}
              style={{ flex: 1, opacity: 0.4, width: 600, height: 400, borderBottomLeftRadius: 400, borderBottomRightRadius: 220 }} />
          </View>
          <View style={{ flex: 0.50, justifyContent: 'center' }}>
            <DropShadow style={styles.searchShadowProp}>
              <TextInput right={<TextInput.Icon icon="magnify" />}
                placeholder="Arama" underlineColor='transparent' selectionColor='black' activeUnderlineColor='transparent' mode="flat" style={{ width: '92%', height: 40, borderRadius: 50, borderTopLeftRadius: 50, borderTopRightRadius: 50 }} />
            </DropShadow>
            <DropShadow style={styles.shadowProp}>
              <FlatList style={{
                width: '100%'
              }} contentContainerStyle={{ justifyContent: "center", alignItems: "center", }}

                data={this.rehber}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => this.props.navigation.push('RehberDetay')} style={{ marginTop: '5%', backgroundColor: 'black', width: '92%', height: 150, borderRadius: 20, flexDirection: 'column' }}>
                    <View style={{ width: '100%', flex: 0.78, flexDirection: 'row' }}>
                      <View style={{ flex: 0.35, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: '70%', height: '70%', backgroundColor: '#FDCC03', borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
                          <Image source={item.image} />
                        </View>
                      </View>
                      <View style={{ flex: 0.65 }}>
                        <View style={{ flex: 0.3, backgroundColor: '#FDCC03', borderTopRightRadius: 20, borderBottomLeftRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
                          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.title}</Text>
                        </View>
                        <View style={{
                          flex: 0.7
                        }}>
                          <FlatList
                                    style={{flexWrap:'wrap',flexDirection:'row'}}
                                    numColumns={2}
                            data={item.statement}
                            renderItem={({ item }) => (
 
                              <View style={{width:'50%',alignItems:'center'}}>             
                                  <Text style={{ color: '#FDCC03',marginTop:'5%'}}>{item.statementtext}</Text>
                              </View>)} />
                        </View>
                      </View>
                    </View>
                    <View style={{ backgroundColor: '#FDCC03', flex: 0.22, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                      <Text style={{ color: 'black', fontSize: 18 }}>Detay</Text>
                    </View>
                  </TouchableOpacity>

                )}
                keyExtractor={item => item.id}
              />
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.8,
    marginTop: -20


  },
  searchShadowProp: {
    shadowOffset: { width: 6, height: 6 },
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowRadius: 5,
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 0.2,

  },
});
export default Rehber;