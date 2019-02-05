import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import reducers from './src/reducers';
import config from './src/controllers/config';

export default class App extends React.Component {
  componentWillMount() {
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Hello World!</Text>
        </View>
      </Provider>
    );
  }
}

