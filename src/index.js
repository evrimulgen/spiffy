import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import firebase from 'firebase'
import reducers from './reducers'
import config from './config'
import Router from './containers/Router'

// Initialize Firebase
const firebaseApp = firebase.initializeApp(config.FIREBASE)

// Initialize Redux store
const store = createStore(reducers, applyMiddleware(thunk))

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        )
    }
}

AppRegistry.registerComponent('spiffy', () => App);
