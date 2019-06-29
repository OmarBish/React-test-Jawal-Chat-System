import React, {Component} from 'react';
import {View,StyleSheet} from 'react-native'
import PropTypes from 'prop-types';
import Logo from '../Components/Logo';
import Form from '../Components/LoginForm';
import ButtonSubmit from '../Components/ButtonSubmit';
import BlanckSpace from '../Components/BlanckSpace';
import Wallpaper from '../Components/Wallpaper';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      password:''
    };
  }
  handleFormChange=(change)=>{
    this.setState(change);
    console.log(this.state)
  }
  render() {
    return (
      <Wallpaper style={styles.background}>
         <Logo />
         <Form formChange={this.handleFormChange}/>
         <BlanckSpace />
         <ButtonSubmit auth={this.state}/>
      </Wallpaper>

    );
  } 
}

const styles = StyleSheet.create({
    background: {
      flex: 1,
    },
  });