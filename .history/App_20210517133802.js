import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from
'react-native'
import SignUp from './signup.js'

import Login from './login.js'

export default class App extends Component {

render(){
return(
  <div>
<Login/>
<Routes/>
</div>

)
}
}