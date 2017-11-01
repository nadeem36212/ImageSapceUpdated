// app/ScarletScreen.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class GreyScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      Uri:'content://media/external/images/media/32229'
    }
  }
  render(){
    return (
      <View style={styles.container}>
        <TouchableOpacity style={{ backgroundColor:'red' }}onPress={ () => { Actions.ss()} }>
          <Image source={{uri: this.state.Uri }} style={{width:110, height:110}}/>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height:110,
    width:110,

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
    margin:2
  },
  welcome: {
    fontSize: 10,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
});
