import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Tinder from "../containers/Tinder"
import Youtube from "../components/Youtube"

const RouterComponent = () => {
    return (
        <Router> 
            <Scene key="root" tabs >
                <Scene key="youtube" component={Youtube} style={{ flex: 1 }} hideNavBar />
                <Scene key="tinder" component={Tinder} hideNavBar />
            </Scene>
        </Router>
    )
}

export default RouterComponent
