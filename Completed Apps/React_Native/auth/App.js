import React from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './src/components/common';
import LoginForm from './src/components/LoginForm';

export default class App extends React.Component {
  state = {
    loggedIn: null
  }
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAI7FE3CrB-jQxFX8z-L0UObRXH9ogcYtY',
      authDomain: 'auth-6f007.firebaseapp.com',
      databaseURL: 'https://auth-6f007.firebaseio.com',
      projectId: 'auth-6f007',
      storageBucket: 'auth-6f007.appspot.com',
      messagingSenderId: '509473152533'
    });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false })
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>  
        
        );
      case false:
        return <LoginForm />;
      default: 
        return <Spinner size='large'/>;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  } }