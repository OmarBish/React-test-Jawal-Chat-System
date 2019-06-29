import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from 'react-native';

import UserInput from './UserInput';

import usernameImg from '../images/username.png';
import passwordImg from '../images/password.png';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      press: false,
      username:'',
      password:''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleNameChange(username) {
    this.setState({ username: username });
    let model = {
      username:username,
      password:this.state.password
    }
    this.props.formChange(model);
  }
  handlePasswordChange(password) {
    this.setState({ password: password });
    let model = {
      username:this.state.username,
      password:password
    }
    this.props.formChange(model);
  }
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <UserInput
          source={usernameImg}
          placeholder="Username"
          autoCapitalize={'none'}
          returnKeyType={'done'}
          autoCorrect={false}
          onChangeText={this.handleNameChange}
        />
        <UserInput
          source={passwordImg}
          secureTextEntry={true}
          placeholder="Password"
          returnKeyType={'done'}
          autoCapitalize={'none'}
          autoCorrect={false}
          onChangeText={this.handlePasswordChange}
        />

      </KeyboardAvoidingView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  btnEye: {
    position: 'absolute',
    top: 55,
    right: 28,
  },
  iconEye: {
    width: 25,
    height: 25,
    tintColor: 'rgba(0,0,0,0.2)',
  },
});
