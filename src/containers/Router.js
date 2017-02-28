import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Tinder from './Tinder'
import Search from './Search'
import CreateStation from './CreateStation'
import { googleSignIn } from '../utils/Login'

class MyRouter extends Component {
  componentDidMount() {
    googleSignIn()
      .then(user => console.log(user))
      .catch(() => googleSignIn())
  }

  render() {
    return (
      <Router>
        <Scene key="root" tabs >
          <Scene key="search" component={Search} hideNavBar />
          <Scene key="createStation" component={CreateStation} hideNavBar />
          <Scene key="tinder" component={Tinder} hideNavBar />
        </Scene>
      </Router>
    )
  }
}

export default MyRouter
