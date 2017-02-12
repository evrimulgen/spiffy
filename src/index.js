import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import firebase from 'firebase'
import reducers from './reducers'
import config from './config'
import Router from './containers/Router'

class App extends Component {
    componentWillMount() {
        firebase.initializeApp(config.FIREBASE)
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
