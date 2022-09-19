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
        <View style={{flex: 20}}>
      <View
        style={styles.con}>
        <View
          style={styles.view}>
          <Image
            source={require('./donaltrum1.png')}
            style={styles.img}></Image>
          <Text
            style={styles.text}>
            DONAL TRUMP
          </Text>
          <Text
            style={styles.text2}>
            Full Stack developer, Android UI
          </Text>
          <Text
            style={styles.text3}>
            Donald Trump is closely associated with the sport of golf. As a real
            estate developer, Trump began acquiring and constructing golf
            courses in 1999
          </Text>
        </View>
      </View>
      <View style={{flex:30, opacity: 0.5}}>
        <View style={{flexDirection: 'row', height: '100%', width: '100%',}}>
          <View
            style={{
              height: '100%',
              width: '50%',
            }}>
            <Text
              style={styles.text4}>
              178
            </Text>
            <Text
              style={styles.text5}>
              rating
            </Text>
            <TouchableOpacity
              style={styles.touch}>
              <Text
                style={{
                  color: '#E710D1',
                  fontWeight: 'bold',
                  alignSelf: 'center',
                }}>
                PORTFOLIO
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: '100%',
              width: '50%',
            }}>
            <Text
              style={styles.text4}>
              9.8
            </Text>
            <Text
              style={styles.text5}>
              projects
            </Text>
            <TouchableOpacity
              style={styles.touch}>
              <Text
                style={{
                  color: '#06896A',
                  fontWeight: 'bold',
                  alignSelf: 'center',
                }}>
                HIRE ME
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  con:{
    flex:20,
    height: '30%',
    width: '100%',
    marginTop: 60,
    alignItems: 'center',
    backgroundColor:'#51AC54',
  },
 text:{
   paddingHorizontal: 100,
   paddingTop: 80,
   position: 'absolute',
   alignSelf: 'center',
   fontSize: 20,
   color: 'black',
   fontWeight: 'bold',
   padding: 0,
 },
 view:{
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: 'black',
    borderWidth: 2,
    height: 300,
    width: 350,
    marginTop:50,
 },
 text3:{
    paddingTop: 130,
    position: 'absolute',
    alignSelf: 'center',
    textAlign: 'center',
    margin: 15,
    fontSize: 15,
    color: 'black',
},
text4:{
     marginTop:150,
     position: 'absolute',
     alignSelf: 'center',
     textAlign: 'center',
     margin: 15,
     fontSize: 35,
     color: 'black',
},
text5:{
     marginTop:150,
     paddingTop: 60,
     position: 'absolute',
     alignSelf: 'center',
     textAlign: 'center',
     margin: 15,
     fontSize: 20,
     color: 'black',
},
touch:{
    margin: 40,
    marginTop: 250,
    borderColor: '#580FCE',
    borderWidth: 2,
    height: 30,
    width: '60%',
    justifyContent: 'center',
 },

text2:{
    paddingTop: 100,
    position: 'absolute',
    alignSelf: 'center',
    margin: 15,
    fontSize: 15,
    color: 'black',
    padding: 0,
  },
  img:{
    zIndex: 3,
    position: 'absolute',
    marginTop: -40,
    alignSelf: 'center',
  },

});
