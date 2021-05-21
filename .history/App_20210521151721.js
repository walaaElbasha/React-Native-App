import React, { Component } from 'react'
import SignUp from './signup.js'
import Todo from './ToDo.js'
import {View} from "react-native";
import BatteryHealth from "./battery.js"
import ImagePickerExample from "./imagepicker"

export default class App extends Component {

render(){       
return(
<View>
<SignUp/>

<Todo/>
<BatteryHealth/>
<ImagePickerExample/>
</View>

)}


}