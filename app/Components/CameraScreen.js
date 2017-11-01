
  import React, { Component } from 'react';
  import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    PermissionsAndroid,
    ScrollView,
    Image
  } from 'react-native';
  import { Actions } from 'react-native-router-flux';
  var ImagePicker = require('react-native-image-picker');

  export default class ScarletScreen extends Component {
    constructor(props){
      super(props)
      this.state = {
        imgResponse:'',
        avatarSource:'',
        photos:[],
        PicturePath:'content://media/external/images/media/32229',
      }
    }
    requestCameraPermission() {
      try {
        const granted = PermissionsAndroid.requestMultiple(
          [
            PermissionsAndroid.PERMISSIONS.CAMERA,
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
          ],
          {
            'title': 'Camera and External Storage Permission',
            'message': 'Cool Photo App needs access to your camera ' +
                       'so you can take awesome pictures.'
          }
        );
        granted.then((response) => {
          console.log(response);
          if (response) {
            this.showImagePicker();
          } else {
            console.log("Camera permission denied")
          }
        });
      } catch (err) {
        console.warn(err)
      }
    }
    showImagePicker(){
    this.setState({ flag:true })
    var options = {
      title: 'Select Avatar',
      customButtons: [
        { name: 'fb', title: 'Choose Photo from Facebook' },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };
    var options = {
      title: 'Select a Photo',
      cancelButtonTitle: 'Cancel',
      takePhotoButtonTitle: 'Take Photo…',
      chooseFromLibraryButtonTitle: 'Choose from Library…',
      quality: 1.0,
      allowsEditing: false,
      permissionDenied: {
        title: 'Permission denied',
        text: 'To be able to take pictures with your camera and choose images from your library.',
        reTryTitle: 're-try',
        okTitle: 'I\'m sure',
      }
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };
        console.log('========================' + response.uri);
        this.state.photos.push(response.uri);
        this.setState({
          PicturePath:response.uri,
          avatarSource: source,
        });
        console.log('============================' + this.state.photos.toString());
      }
    });
  }
  render(){
    return (
      <View style={styles.container}>
        <View style={ styles.ChildContainer }>
          <View style={ styles.headerView }>
            <Text style={ styles.headerText }>Take Pictues</Text>
          </View>
          <View style={ styles.CamerView }>
            <ScrollView >
              <View style={ styles.CamerChildView }>
                <View style={ styles.ImageView }>
                  <Image source={{ uri: this.state.PicturePath }} style={ styles.Image }/>
                </View>
                <View style={ styles.CamerBtnView }>
                  <TouchableOpacity style={ styles.CameraBtn } onPress={ this.requestCameraPermission.bind(this) }>
                    <Text style={ styles.btnText }>
                      Camera
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
          <View style={ styles.SeePhotosView }>
            <TouchableOpacity style={ styles.SeePhotosBtn } onPress={ () =>{ Actions.HomeScreen({ photosList:this.state.photos }) }}>
              <Text style={ styles.btnText }>
                See all Photos
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ChildContainer:{
    backgroundColor:'black',
    flex:5
  },
  btnText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight:'bold',
    color:'black'
  },
  headerView:{
    height:50,
    justifyContent:'center',
    alignItems:'center'
  },
  headerText:{
    color:'white',
    fontSize:20
  },
  CamerView:{
    flex:4,
    backgroundColor:'#1e1e1e',
    margin:20,
    borderRadius:20
  },
  CamerChildView:{
    flex:4,
    alignItems:'center',
    justifyContent:'center'
  },
  ImageView:{
    flex:3,
    marginTop:30
  },
  Image:{
    width:300,
    height:300,
    resizeMode:'contain'
  },
  CamerBtnView:{
    flex:1,
    alignItems:'center'
  },
  CameraBtn:{
    backgroundColor:'#fff100',
    margin:20,
    borderRadius:20,
    width:200
  },
  SeePhotosView:{
    backgroundColor:'#1e1e1e',
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:20
  },
  SeePhotosBtn:{
    backgroundColor:'#fff100',
    width:300,
    borderRadius:20
  }
});
