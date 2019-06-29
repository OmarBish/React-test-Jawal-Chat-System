import React, {Component} from 'react';
import {View,StyleSheet,Text} from 'react-native'
import PropTypes from 'prop-types';
import Logo from '../Components/Logo';
import Form from '../Components/LoginForm';
import SubmitButton from '../Components/ButtonSubmit';
import BlanckSpace from '../Components/BlanckSpace';
import Wallpaper from '../Components/Wallpaper';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth:{
        username:'',
        password:''
      },
      invalidData:false
      
    };
  }
  handleFormChange=(change)=>{
    this.setState({auth:change});
    console.log(this.state)
  }
  invalidInput = ()=>{
      this.setState({invalidData:true})
  }
  Invalid=()=>{
    return 
  }
  render() {
    return (
      <Wallpaper style={styles.background}>
         <Logo />
         <Form formChange={this.handleFormChange}/>
         <BlanckSpace />
         <SubmitButton auth={this.state.auth} invalidInput={this.invalidInput}/>
         <Text style={{color:"red",flex:1,textAlign:"center"}}>{
           this.state.invalidData ?'invalid credentials':''
         }</Text>
      </Wallpaper>

    );
  } 
}

const styles = StyleSheet.create({
    background: {
      flex: 1,      
    },
  });