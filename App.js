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
          colors={['#00C4C4C4', '#28F7AC']}
          locations={[0.1, 1.0]}
          style={styles.linearGradient}>
          <Image style={styles.img} source={require('./circle.png')} />
          <View style={styles.view}>
            <Text style={styles.text}>GROW YOUR BUSINESS</Text>
            <Text style={styles.text1}>We will help you to grow your business using online server</Text>
          </View>
          <View style={{flex:0.5, marginTop:66}}>
            <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
              <TouchableOpacity
                style={{
                  borderColor: 'white',
                  backgroundColor: '#E3C000',
                  height: 40,
                  justifyContent: 'center',
                  width: 100,
                }}>
                <Text style={styles.text3}>LOGIN</Text>
              </TouchableOpacity>
              <View style={{ flex: 0.5 }}></View>
              <TouchableOpacity
                style={{
                  borderColor: 'white',
                  backgroundColor: '#E3C000',
                  height: 40,
                  justifyContent: 'center',
                  width: 100,
                }}>
                <Text style={styles.text3}>SING IN</Text>
              </TouchableOpacity>
            </View>
             
          </View>
         <View style={styles.view1}>
            <Text style={styles.text1}>HOW WE WORK?</Text>
          </View>
        </LinearGradient>

        {/*Horizontal Gradient*/}
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
    paddingLeft: 15,
    paddingRight: 15,
    //  borderRadius: 5,
    marginTop: 16,
    width: '100%',
    height:'100%',
  },
  img: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 69,
    marginLeft: 90,
    // flex:1,
    //alignSelf:'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 25,
    fontStyle: 'Bold',
    fontFamily: 'Roboto',
  },
  view: {
    flex: 1,
    marginTop: 66,
  },
  view1: {
    flex:1,
    marginTop:0,
  },
  text1: {
    marginTop: 66,
    textAlign: 'center',
    fontSize: 14,
    fontStyle: 'Bold',
    fontFamily: 'Roboto',
  },
  text3:{
     color: 'black',
     alignSelf: 'center',
    fontWeight: 'bold',
  },
});
