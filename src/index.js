import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import firebase from 'firebase'
import rootReducer from './reducers'
import config from './config'
import Router from './containers/Router'

// Initialize Firebase
const firebaseApp = firebase.initializeApp(config.FIREBASE)

// Initialize a middleware that logs actions
const loggerMiddleware = createLogger()

// Initialize Redux store
const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('spiffy', () => App)
