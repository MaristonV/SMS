import React, { useState, useEffect } from 'react'
import { TouchableOpacity, Text,StyleSheet,ScrollView ,Image, NavigationActions,  AsyncStorage} from 'react-native'
import PropTypes, { string } from 'prop-types'

import api from '../../services/api'
import { deleteUser } from '../../utils'
import ProductItem from '../../components/ProductItem'

import { Container, Title, Button, ButtonText, ProductList } from './styles'
import { View } from '../Welcome/styles'
import {Logo} from './styles'

//import BaseIcon from './Icon'

export default function Home() {
  
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [matricula, setMatricula] = useState();
  const [funcionario,setFuncionario ] = useState();
  const [funcao,setFuncao ] = useState();
 
  //const params = navigation.state.params;
  const styles = StyleSheet.create({
    header:{
      backgroundColor: "#f7f5f5",
    },
    headerContent:{
      padding:2,
      alignItems: 'center',
      flexDirection:"row",
      
    },
    headerContents:{
      padding:6,
      alignItems: 'center',
      flexDirection:"row",
      
    },
    avatar: {
      width: 110,
      height: 110,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
     // marginBottom:2,
    },
    name:{
      fontSize:22,
      color:"#000000",
      fontWeight:'600',
    },
    userInfo:{
      fontSize:16,
      color:"#778899",
      fontWeight:'600',
    },
    body:{
      backgroundColor: "#778899",
      height:500,
      alignItems:'center',
    },
    item:{
      flexDirection : 'row',
    },
    infoContent:{
      flex:1,
      alignItems:'flex-start',
      paddingLeft:5
    },
    iconContent:{
      flex:1,
      alignItems:'flex-end',
      paddingRight:5,
    },
    icon:{
      width:30,
      height:30,
      marginTop:20,
    },
    info:{
      fontSize:18,
      marginTop:20,
      color: "#FFFFFF",
    },
    infoUser:{
      paddingLeft:20,
      
    },
    infoText:{
      paddingLeft:0,
      fontSize:11,
    },
    infoPaddingLeft:{
      paddingRight:120
    },
    infoImageBack:{
        paddingLeft:10
    }
  });
   
  

  useEffect(() => {
    async function loadProducts() {
      const valorMatricula = await AsyncStorage.getItem('matricula')
      setMatricula(valorMatricula);
      const response = await api.get('/cursosfuncionarios')
     setData(response.data.filter(d=> d.MATRICULA === valorMatricula));
     console.log(data)
      
    }
    loadProducts();
  }, []);
  const infoUser = data;
  renderListItem = ({ item }) => <ProductItem product={item} />
 
  async function getFuncionario() {
    const funcionario = await AsyncStorage.getItem('funcionario')
    setFuncionario(funcionario);
    const funcao = await AsyncStorage.getItem('funcao')
    setFuncao(funcao);
  }

  getFuncionario();
  
  return (
    <Container>
      <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>            
              <View style={styles.infoUser} >               
                <Text style={styles.infoText} >{funcionario}</Text>
                <Text style={styles.infoText}>{funcao}</Text> 
                </View>
                <Image style={styles.avatar}
                  source={{uri: 'https://static.vecteezy.com/system/resources/previews/000/512/576/non_2x/vector-profile-glyph-black-icon.jpg'}}/>
                  
            </View>
          </View>      
          </View>
      <ProductList
        data={data}
        keyExtractor={item => String(item.MATRICULA)}
        renderItem={renderListItem}
      />
    </Container>
  );
}

Home.navigationOptions = ({ navigation }) => {
  return {
    title: '',
    headerBackTitleVisible: true,

    headerLeft: () => (
      <TouchableOpacity
        onPress={() => (
            navigation.navigate('QRCode')         
        )}
        style={{   }}
      >  
      <View style={{flexDirection: "row"}}>
       <Image style={{height:20}}
                  source={require('../../images/back.png')}/> 
                  <Text style={{paddingLeft:60}}></Text>
                  <Image style={{height:30, width:120,  padding:0 }}
                  source={require('../../images/System_name.png')}/>     
                  </View>      
      </TouchableOpacity>
    ),
  };
  
};

Home.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
  }).isRequired,
};

