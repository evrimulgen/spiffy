import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Scene, Router } from 'react-native-router-flux'
import { userLoggedIn, initStation } from '../actions'
import { googleSignIn } from '../utils/Login'
import { getSpiffyId } from '../utils'
import Tinder from './Tinder'
import Search from './Search'
import CreateStation from './CreateStation'
import Station from './Station'

class MyRouter extends Component {
  componentDidMount() {
    googleSignIn()
      .then(user => this.props.dispatch(userLoggedIn(user)))
      .catch(() => googleSignIn())
      .then(() => this.props.dispatch(initStation()))
  }

  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar>
          <Scene key="station" component={Station} hideNavBar />
          <Scene key="search" component={Search} hideNavBar />
          <Scene key="createStation" component={CreateStation} hideNavBar />
          <Scene key="tinder" component={Tinder} hideNavBar />
        </Scene>
      </Router>
    )
  }
}

export default connect()(MyRouter)
