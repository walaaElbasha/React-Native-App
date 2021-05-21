import React, { Component } from 'react'
import SignUp from './signup.js'
import Todo from './ToDo.js'
import {View} from "react-native";


export default class App extends Component {

render(){
return(
<View>
<SignUp/>

<Todo/>
</View>

)

}
}