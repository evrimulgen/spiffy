import { AppRegistry } from 'react-native'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import firebase from 'firebase'
import { FIREBASE_CONFIG } from './config'
import reducers from './reducers'
import Router from './containers/Router'

class App extends Component {
    componentWillMount() {
        firebase.initializeApp(FIREBASE_CONFIG)
    }
    
    render() {
        const store = createStore(reducers, applyMiddleware(thunk))

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        )
    }
}

AppRegistry.registerComponent('spiffy', () => App);
