import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { Title } from "react-native-paper";

import ImagePickerExample from "./imagepicker";
import BatteryHealth from "./battery.js";

class Profile extends Component {
  render() {
    return (
      <View>
        <Text>your email:</Text>
        <Text> {this.props.email}</Text>

        <BatteryHealth />
        <ImagePickerExample />
      </View>
    );
  }
}

export default Profile;
