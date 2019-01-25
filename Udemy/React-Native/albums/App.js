import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textInput}>Hello World!</Text>
        <Text style={styles.textInput}>Hello Lemi!!</Text>
        <Text style={styles.textInput}>Hello Jeff!</Text>
        <Text style={styles.textInput}>Hello Ana!</Text>
        <Text style={styles.textInput}>Hello Larry!</Text>
        <Text style={styles.textInput}>Hello Ray!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: 'center',
    justifyContent: 'center',
    color: "white"
  },
  textInput: {
    color: "white",
  }
});


