import React, { useState } from 'react'
import { StackActions, NavigationActions } from 'react-navigation'
import { StatusBar, ActivityIndicator, AsyncStorage } from 'react-native'
import PropTypes from 'prop-types'
import axios from 'axios'
import deviceStorage from '../../services/deviceStorage';
import api from '../../services/api'
import axios from 'axios'
import {
  Container,
  Title,
  TextInformation,
  Error,
  Form,
  Input,
  Button,
  ButtonText,
  Logo,
  LogoMKS,
  
} from './styles'



export default function Welcome(props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  
  /*async function saveUser(user) {
    await AsyncStorage.setItem('@ListApp:userToken', JSON.stringify(user))
  }*/

  async function signIn() {
    if (username.length === 0 || password.length === 0) return

    setLoading(true)

    try {

      axios.post("http://mkscar1web2:3000/login",{
        username: username,
        password: password
        
    })
    .then((response) => {
     // deviceStorage.saveKey("id_token", response.data.jwt);
     // this.props.newJWT(response.data.jwt);
     console.log(response);
    })
    .catch((error) => {
      console.log(username,password);
      console.log(error.response);
     // this.onLoginFail();
    });
    } catch (err) {
      console.log(err)
      setLoading(false)
      setErrorMessage('Usuário não existe')
    }
  }

  
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      {!!errorMessage && <Error>{errorMessage}</Error>}
      <Form>    
      <Logo source={require('../../images/System_name.png')}  />
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Usuario"
          underlineColorAndroid="rgba(0, 0, 0, 0)"
          value={username}
          onChangeText={username => setUsername(username)}
        />
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Senha"
          underlineColorAndroid="rgba(0, 0, 0, 0)"
          secureTextEntry={true}
          value={password}
          onChangeText={password => setPassword(password)}
        />
        <Button onPress={signIn}>
          {loading ? (
            <ActivityIndicator size="small" color="#FFF" />
          ) : (
            <ButtonText>Entrar</ButtonText>
          )}
        </Button>
      </Form>
    </Container>
  )
}

Welcome.navigationOptions = () => {
  return {
    header: null,
  }
}

Welcome.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
  }).isRequired,
}

