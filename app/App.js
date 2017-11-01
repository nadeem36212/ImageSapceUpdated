import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
 import GreyScreen from './Components/GreyScreen';
import CameraScreen from './Components/CameraScreen';
import HomeScreen from './Components/HomeScreen';
export default class ImageSpace extends Component {
    render() {
        return (
                <Router>
                    <Scene
                        key="root"
                        hideNavBar
                    >
                    <Scene
                        key="HomeScreen"
                        component={HomeScreen}
                        title=""
                        direction="horizontal"
                        //initial
                        duration={0}
                    />
                    <Scene
                        key="CameraScreen"
                        component={CameraScreen}
                        title=""
                        direction="horizontal"
                        initial
                        duration={0}
                    />
                    <Scene
                        key="gs"
                        component={GreyScreen}
                        title=""
                        direction="horizontal"

                        duration={0}
                    />
                    </Scene>
                </Router>
        );
    }
}
