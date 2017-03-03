import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Scene, Router } from 'react-native-router-flux'
import { userLoggedIn } from '../actions'
import { googleSignIn } from '../utils/Login'
import Tinder from './Tinder'
import Search from './Search'
import CreateStation from './CreateStation'
import Station from './Station'

class MyRouter extends Component {
  componentDidMount() {
    googleSignIn()
      .then(user => this.props.dispatch(userLoggedIn(user)))
  }

  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar>
          <Scene key="search" component={Search} hideNavBar />
          <Scene key="station" component={Station} hideNavBar />
          <Scene key="createStation" component={CreateStation} hideNavBar />
          <Scene key="tinder" component={Tinder} hideNavBar />
        </Scene>
      </Router>
    )
  }
}

export default connect()(MyRouter)
