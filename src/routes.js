import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Welcome from './pages/Welcome'
import Home from './pages/Home'
import AuthLoadingScreen from './pages/AuthLoadingScreen'
import QRCodeScanner from './pages/QRCode'
import Teste from './pages/QRCode/teste'
import Splashscreen from './pages/Splascreen'
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';

const StackNavigator = createStackNavigator(
  {
    Home,
    QRCodeScanner,
    Teste,
    Splashscreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
  {
    transitionConfig: getSlideFromRightTransition     //This use for navigation transition

 },
);

const StackNavigatorContainer = createAppContainer(StackNavigator);

const AuthStack = createStackNavigator(
  {
   // SignIn: Welcome,
    SignIn: Welcome,
    App: StackNavigatorContainer,
    QRCode: QRCodeScanner,
    teste: Teste,
   SplashScreen: Splashscreen,
  },
  {
    initialRouteName: 'SplashScreen',
    headerMode: 'none',
    header: null,
  },
);

const RootStack = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStack,
    App: StackNavigatorContainer,
    // Auth: AuthStack
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

const RootStackContainer = createAppContainer(RootStack);

export default RootStackContainer;
