// src/screens/SettingsScreen.js
import React, { Component } from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput,
    Keyboard,
    TouchableOpacity
} from 'react-native';
import {Actions, ActionConst} from 'react-native-router-flux';

import axios from "axios";
export default class SettingsScreen extends React.Component {
    
    constructor(props) {
        super(props);
      
        this.state = { content: '' }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleNameChange(content) {
          console.log(content)
        this.setState({ content:content });
      }
    handleSubmit(){
        let model ={
            content:this.state.content,
            userid:22
        };
        axios.get('http://sadekj.herokuapp.com/addPost/'+JSON.stringify(model))
            .then((res)=>{
                setTimeout(() => {
                    Actions.postsScreen();
                  }, 500);
            }).catch(()=>{

            })
    }
      
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.header}>Add new post</Text>
                    <ScrollView>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Your post"
                                maxLength={20}
                                multiline={true}
                                numberOfLines={5}
                                onBlur={Keyboard.dismiss}
                                value={this.state.content}
                                onChangeText={this.handleNameChange}
                            />
                        </View>
                    </ScrollView>
                    <View style={styles.inputContainer}>
                        <TouchableOpacity
                            style={styles.saveButton}
                            onPress={this.handleSubmit}
                        >
                            <Text style={styles.saveButtonText}>Save</Text>
                        </TouchableOpacity>
                    </View>


                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 45,
        backgroundColor: '#F5FCFF',
    },
    header: {
        fontSize: 25,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold'
    },
    inputContainer: {
        paddingTop: 15
    },
    textInput: {
        borderColor: '#CCCCCC',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        height: 50,
        fontSize: 25,
        paddingLeft: 20,
        paddingRight: 20
    },
    saveButton: {
        borderWidth: 1,
        borderColor: '#4CAF50',
        backgroundColor: '#4CAF50',
        padding: 15,
        margin: 5
    },
    saveButtonText: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center'
    }


});
