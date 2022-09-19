import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  TextInput
} from 'react-native';
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';
import AssetExample from './components/AssetExample';

import { Card } from 'react-native-paper';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <LinearGradient
          colors={['#BDF6C600', '#BDF6C6']}
          locations={[0, 2.0]}
          style={styles.linearGradient}>
          <View style={{flex: 25, justifyContent: 'center'}}>
        <Image source={require('./lock.png')} style={{alignSelf: 'center'}}></Image>
        <Text
          style={styles.text2}>
          FORGET
        </Text>
        <Text
          style={styles.text3}>
          PASSWORD
        </Text>
      </View>
      <View style={{flex: 15, justifyContent: 'center'}}>
        <Text
          style={styles.text1}>
          Provide your account’s email for which you want to reset your password
        </Text>
        <View
          style={styles.view}>
          <Image source={require('./mail.png')}></Image>
          <TextInput placeholder="Email"></TextInput>
        </View>
      </View>
      <View style={{flex:10}}>
        <TouchableOpacity
          style={styles.btn}>
          <Text style={styles.text}>
            NEXT
          </Text>
        </TouchableOpacity>
      </View>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  linearGradient: {
    //  borderRadius: 5,
   marginTop: 16,
    width: '100%',
    height:'100%',
  },
  text:{
    color: 'black', fontWeight: 'bold', fontSize: 18
  },
  btn:{
   height: 40,
   width: 340,
   margin: 5,
   marginTop:5,
   backgroundColor: '#E3C000',
   justifyContent: 'center',
   alignItems: 'center',
  },
  text1:{
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
  },
  text2:{
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
    alignSelf: 'center',
    margin: 10,
  },
  text3:{
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
    alignSelf: 'center',
 },
 view:{
   flexDirection: 'row',
   height: 45,
   width: 340,
   margin: 10,
   backgroundColor: '#C4C4C4',
  },
  
});
