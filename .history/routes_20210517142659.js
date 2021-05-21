import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Login from './Login.js'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "login" component = {Login} title = "login" initial = {true} />

      </Scene>
   </Router>
)
export default Routes

