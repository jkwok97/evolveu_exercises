import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import store from './store';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import ReviewScreen from './screens/ReviewScreen';
import SettingScreen from './screens/SettingScreen';

export default class App extends React.Component {
  render() {

    const MainNavigator = createAppContainer(createBottomTabNavigator({
      welcome: { 
        screen: WelcomeScreen,
        navigationOptions: {
          tabBarVisible: false
        }
      },
      auth: {
        screen: AuthScreen,
        navigationOptions: {
          tabBarVisible: false
        }
      },
      main: {
        navigationOptions: {
          tabBarVisible: false
        },
        screen: createBottomTabNavigator({
          map: MapScreen,
          deck: DeckScreen,
          review: {
            screen: createStackNavigator({
              review: ReviewScreen,
              setting: SettingScreen
            })
          }
        })
      }
    }), {
      lazy: true
    });

    return (
        <Provider store={store}>
          <MainNavigator />
        </Provider>
    );
  }
}

