import React, { Component } from 'react';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';

import Login from './Views/Login';
import Posts from './Views/Posts';
import addPost from './Views/AddPost'

export default class main extends Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="loginScreen"
                        component={Login}
                        animation='fade'
                        hideNavBar={true}
                        initial={true}
                    />
                    <Scene key="postsScreen"
                        component={Posts}
                        animation='fade'
                        hideNavBar={true}
                        
                    />
                     <Scene key="addPost"
                        component={addPost}
                        animation='fade'
                        hideNavBar={true}
                        
                    />
                </Scene>
            </Router>
        )
    }
}
