import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Alert, ImageBackground,Image,AsyncStorage,ActivityIndicator} from 'react-native';
import { StackActions, NavigationActions  } from 'react-navigation';

//type Props = {};
export default class Splashscreen extends Component {
 
 
componentDidMount () {
    setTimeout(() => {
    //  this._retrieveData();
    const { navigate } = this.props.navigation;
    navigate('SignIn')
    }, 2000)
    
  }

  render() {
    return (
      <View style={styles.container}>
       <ImageBackground
  source={require('../../images/Abertura.png')}
      imageStyle={{resizeMode: 'stretch'}}
  style={{width: '101%', height: '100%'}}>
  
      <View  style={{ flex: 1, justifyContent: 'center',
    alignItems: 'center', }} >
 
      <ActivityIndicator size="large" color="#1562b0" /> 
          </View>
      </ImageBackground>
 
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
   headerStyle: {
    width: 150,
    height: 150,
  },
});