import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Tinder from "../containers/Tinder"
import Youtube from "../components/Youtube"
import Search from "../containers/Search"

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" tabs >
                <Scene key="search" component={Search} hideNavBar />
                <Scene key="tinder" component={Tinder} hideNavBar />
            </Scene>
        </Router>
    )
}

export default RouterComponent
