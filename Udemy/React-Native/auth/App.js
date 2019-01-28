import React from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';

export default class App extends React.Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAI7FE3CrB-jQxFX8z-L0UObRXH9ogcYtY',
      authDomain: 'auth-6f007.firebaseapp.com',
      databaseURL: 'https://auth-6f007.firebaseio.com',
      projectId: 'auth-6f007',
      storageBucket: 'auth-6f007.appspot.com',
      messagingSenderId: '509473152533'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}