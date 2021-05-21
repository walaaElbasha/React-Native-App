import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Login from './login.js'
import About from './About.js'


const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "login" component = {Login} title = "login" initial = {true} />
         <Scene key = "about" component = {About} title = "About" />
      </Scene>
   </Router>
)
export default Routes

