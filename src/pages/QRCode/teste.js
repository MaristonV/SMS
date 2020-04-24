import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class teste extends Component {

constructor(props){
    super(props);
}

render(){

    const params = this.props.navigation.state.resultado;


    return(
        <View>
            <Text>{ params}</Text>
           
        </View>
    );
}
}