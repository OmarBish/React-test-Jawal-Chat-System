import React, { Component } from 'react'
import { Text, View ,StyleSheet} from 'react-native'
import Main from './App/main';



export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Main />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
