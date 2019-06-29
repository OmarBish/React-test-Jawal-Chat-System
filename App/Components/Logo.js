import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, Image } from 'react-native';

export default class Logo extends Component {
  render() {
    let logo = {
      uri: 'https://yt3.ggpht.com/a/AGF-l7_EbVAPin0xwTdM2nEJslgXYr-eGicE5vAdvA=s288-mo-c-c0xffffffff-rj-k-no'
    }
    return (
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image source={logo} style={styles.image} />
        </View>
        <Text style={styles.text}>Jawal Chat system</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100
  },
  imgContainer: {

  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: 20,
    fontSize:20
  },
});
