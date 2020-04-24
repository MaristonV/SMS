import React,{useState, useEffect} from 'react'
import { Text,AsyncStorage } from 'react-native'

import { Container,ContainerRed,ContainerGreen, ProductImage, InfoContainer, ProductName,Image } from './styles'
import Moment from 'moment';
export default function ProductItem({ product }) {

  const [status, setStatus] = useState();
  Moment.locale('pt-br');
  var dt = product.VALIDADE;

  useEffect(() => {
    // Atualiza o titulo do documento usando a API do browser 
      let funcionario = product.FUNCIONARIO;
      let funcao = product.FUNCAO;
      AsyncStorage.setItem('funcionario', funcionario);
      AsyncStorage.setItem('funcao', funcao);
     // Alert.alert(matricula);
  
  });


  return (
    <Container>
      
      <InfoContainer>
        <ProductName>Certificado: {product.CURSO}</ProductName>
        <Text>Data Curso: {product.cost}</Text>
        <Text>Data Validade: {Moment(dt).format('DD-MM-YYYY')}</Text>
        <Text>Valido:
        <Text> </Text>  
        <Image 

        source={product.STATUS === 'N'? require('../../images/circleRed.png'):
        require('../../images/circleGreen.png')}
         //source={require('../../images/circleRed.png')}
         /> 
        </Text>
      </InfoContainer>  
    </Container>
  );
}
