  // app/ScarletScreen.js

  import React, { Component } from 'react';
  import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    PermissionsAndroid,
    ScrollView,
    FlatList,
    Image
  } from 'react-native';
  import { Actions } from 'react-native-router-flux';
  var ImagePicker = require('react-native-image-picker');

  export default class HomeScreen extends Component {
    constructor(props){
      super(props)
      this.state = {
        imgResponse:'',
        avatarSource:'',
        photos:[],
        PicturePath:'',
        AllPhotos:[]
        }
      }
    componentWillMount(){
      console.log('photos list is',this.props.photosList);
    }
    _keyExtractor = (item, index) => item.id;
    render(){
      return (
        <View style={styles.container}>
          <View style={ styles.headerView }>
            <Text style={ styles.headerText }>Photos List</Text>
          </View>
          <View style={ styles.photosListView }>
              <ScrollView>
                <FlatList
                  contentContainerStyle={ styles.list }
                  keyExtractor={ this._keyExtractor }
                  data={ this.props.photosList }
                  horizontal={false}
                  numColumns={3}
                  renderItem={ ({item,index}) =><Image source={{ uri: this.props.photosList[index] }} style={ styles.image } />}
                />
              </ScrollView>
          </View>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'black'
    },
    headerView:{
      backgroundColor:'black',
      height:50,
      justifyContent:'center'
    },
    headerText:{
      color:'white',
      textAlign:'center',
      fontSize:20
    },
    photosListView:{
      flex:5,
      backgroundColor:'#1e1e1e',
      margin:10,
      borderRadius:20
    },
    image:{
      margin:2,
      width:100,
      height:100,
    },
    list:{
      justifyContent: 'center',
      margin:10,
    }
  });
