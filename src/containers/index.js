import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Scene, Router } from 'react-native-router-flux'
import Tinder from './Tinder'
import Search from './Search'
import CreateStation from './CreateStation'
import { googleSignIn } from '../utils/Login'
import { userLoggedIn } from '../actions'

class MyRouter extends Component {
  componentDidMount() {
    googleSignIn()
      .then(user => this.props.dispatch(userLoggedIn(user)))
      .catch(() => googleSignIn())
  }

  render() {
    return (
      <Router>
        <Scene key="root" tabs >
          <Scene key="createStation" component={CreateStation} hideNavBar />
          <Scene key="search" component={Search} hideNavBar />
          <Scene key="tinder" component={Tinder} hideNavBar />
        </Scene>
      </Router>
    )
  }
}

export default connect()(MyRouter)
