import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';
import Router from './src/Router';

const config = {
  apiKey: 'AIzaSyBGCXORIrrhxuUgBMfA3Du2Ryl5yOJ0LvI',
  authDomain: 'manager-9141f.firebaseapp.com',
  databaseURL: 'https://manager-9141f.firebaseio.com',
  projectId: 'manager-9141f',
  storageBucket: 'manager-9141f.appspot.com',
  messagingSenderId: '353683680356'
};

export default class App extends React.Component {
  componentWillMount() {
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}


