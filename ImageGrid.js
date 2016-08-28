import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './Home'
import ImageDetails from './ImageDetails'

export default function ImageGrid() {
  return (
    <Router>
      <Scene key="root">
        <Scene key="home" component={Home} title="Home" initial />
        <Scene key="imageDetails" component={ImageDetails} title="Image Details" />
      </Scene>
    </Router>
  )
}
