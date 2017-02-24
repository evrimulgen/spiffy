import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Tinder from '../containers/Tinder'
import Search from '../containers/Search'
import CreateStation from '../containers/CreateStation'

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" tabs >
                <Scene key="tinder" component={Tinder} hideNavBar />
                <Scene key="search" component={Search} hideNavBar />
                <Scene key="createStation" component={CreateStation} hideNavBar />
            </Scene>
        </Router>
    )
}

export default RouterComponent
