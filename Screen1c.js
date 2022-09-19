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
    <SafeAreaView style={{ flex: 10 }}>
      <View style={styles.container}>
        <LinearGradient
          colors={['#C7F4F600', '#D1F4F6','#E5F4F5','#00CCF9']}
          style={styles.linearGradient}>
           <View style={{flex: 12, justifyContent: 'center'}}>
        <Text
          style={styles.text}>
          CODE
        </Text>
        <Text
          style={styles.text3}>
          VERIFICATION
        </Text>
      </View>
      <View style={{flex: 15, justifyContent: 'center'}}>
        <Text
          style={styles.text4}>
          Enter ontime password sent on ++849092605798
        </Text>
        <View
          style={styles.view}>
          <TouchableOpacity
            style={styles.touch}></TouchableOpacity>
          <TouchableOpacity
             style={styles.touch}></TouchableOpacity>
          <TouchableOpacity
            style={styles.touch}></TouchableOpacity>
          <TouchableOpacity
             style={styles.touch}></TouchableOpacity>
          <TouchableOpacity
             style={styles.touch}></TouchableOpacity>
          <TouchableOpacity
            style={styles.touch}></TouchableOpacity>
        </View>
      </View>
      <View style={{flex:10, alignItems: 'center',marginTop:10}}>
        <TouchableOpacity
          style={{
            height: 40,
            width: 300,
            margin: 15,
            justifyContent: 'center',
            backgroundColor: '#E3C000',
          }}>
          <Text
            style={styles.text2}>
            VERIFY CODE
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
   color: 'black',
   fontSize: 50,
   fontWeight: 'bold',
   alignSelf: 'center',
 },
 view:{
    flexDirection: 'row',
    paddingVertical: 5,
    marginVertical: 5,
    justifyContent: 'center',
 },
 text3:{
    color: 'black',
    fontSize: 20,
    marginTop: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
},
text4:{
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    alignSelf: 'center',
},
touch:{
    height: 40,
    width: 40,
    borderColor: 'black',
    borderWidth: 1,
},
text2:{
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },

});
