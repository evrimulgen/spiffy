import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Scene, Router } from 'react-native-router-flux'
import { userLoggedIn, initStation } from '../actions'
import { googleSignIn } from '../utils/login'
import Tinder from './Tinder'
import Search from './Search'
import Station from './Station'
import ListStations from './ListStations'

class MyRouter extends Component {
  componentWillMount() {
    googleSignIn()
      .then(user => this.props.dispatch(userLoggedIn(user)))
      .catch(() => googleSignIn())
  }

  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar>
          <Scene key="listStations" component={ListStations} hideNavBar />
          <Scene key="station" component={Station} hideNavBar />
          <Scene key="search" component={Search} hideNavBar />
          <Scene key="tinder" component={Tinder} hideNavBar />
        </Scene>
      </Router>
    )
  }
}

export default connect()(MyRouter)
