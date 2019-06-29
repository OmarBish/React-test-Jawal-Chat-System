import React, {Component} from 'react';
import {View,StyleSheet} from 'react-native'
import PropTypes from 'prop-types';
import Logo from '../Components/Logo';
import Form from '../Components/LoginForm';
import ButtonSubmit from '../Components/ButtonSubmit';
import BlanckSpace from '../Components/BlanckSpace';
import Wallpaper from '../Components/Wallpaper';

export default class LoginScreen extends Component {
  render() {
    return (
      <Wallpaper style={styles.background}>
         <Logo />
         <Form />
         <BlanckSpace />
         <ButtonSubmit />
      </Wallpaper>

    );
  } 
}

const styles = StyleSheet.create({
    background: {
      flex: 1,
    },
  });