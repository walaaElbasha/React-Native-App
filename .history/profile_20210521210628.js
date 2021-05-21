import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from
'react-native'
import { Title } from 'react-native-paper';

import ImagePickerExample from "./imagepicker"

class Profile extends Component {

render() {
    return (
      <View>
          <BatteryHealth/>
       <ImagePickerExample/>
      </View>
    );
  }


}

export default Profile;