import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Tinder from "../components/Tinder"

const Router = () => {
    return (
        <Router> 
            <Scene key="root" tabs >
                <Scene key="tinder" component={Tinder} title="Tinder" hideNavBar />
            </Scene>
        </Router>
    )
}

export default Router
