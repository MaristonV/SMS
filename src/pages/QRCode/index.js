import React, { Component } from "react";
import {
  View,
  WebView,
  Text,
  Linking,
  Dimensions,
  StyleSheet,
  AsyncStorage,
} from "react-native";
import { StackActions,Alert, NavigationActions } from 'react-navigation';
import QRCodeScanner from "react-native-qrcode-scanner";
import{Logo,Container,} from './styles';



export default class QRCodeScreen extends Component {

  state = {
    url: '',
  };

  saveData(){        
    let matricula = this.state.url;
    AsyncStorage.setItem('matricula', matricula);
  
}

  onSuccess = async (e) => {
    await this.setState({ url: e.data });  
    this.saveData();
    const { navigate } = this.props.navigation;
    navigate('Home')
   
  };

  render() {
    //saveData();
    return (
      <View style={styles.container}>
        <Container>
        <Logo source={require('../../images/System_name.png')}  />
        </Container>
        <QRCodeScanner
          onRead={this.onSuccess}
          showMarker={true}
          checkAndroid6Permissions={true}
          ref={(elem) => { this.scanner = elem }}
          cameraStyle={styles.cameraContainer}
          reactivate={true}
          bottomContent={
            <View style={styles.touchable}>
              {this.state.success && (
                <Text style={styles.text}>OK. Got it!</Text>
              )}
            </View>
          }
        />
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black"
  },
  
  touchable: {
    padding: 16
  },
  
  text: {
    fontSize: 21,
    color: "rgb(0,122,255)"
  },
  
  cameraContainer: {
    //height: Dimensions.get('window').height,
      height: '3%',
  }
  
  
});