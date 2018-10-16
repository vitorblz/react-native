import { AsyncStorage } from 'react-native';
import { Navigation } from 'react-native-navigation';
import App from './src/screens/App';
import Login from './src/screens/Login.js';

Navigation.registerComponent('Todolist', () => App);
Navigation.registerComponent('Login', () => Login);

AsyncStorage.getItem('username')
.then(username => {

  if(username) {
    return {
      screen: 'Todolist',
      title: 'Home',
    };
  }

  return {
    screen: 'Login'
  };
})
.then(screen => Navigation.startSingleScreenApp({screen}))
