import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import firebase from 'firebase'
import reducers from './reducers'
import { firebase_config } from './config'
import Router from './Router'

class App extends Component {
    componentWillMount() {
        firebase.initializeApp(firebase_config)
    }
    
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        )
    }
}

AppRegistry.registerComponent('spiffy', () => App);
