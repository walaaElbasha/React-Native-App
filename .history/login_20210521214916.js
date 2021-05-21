import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import SignUp from "./signup.js";
import Profile from "./profile.js";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleEmail = (text) => {
    this.setState({ email: text });
  };
  handlePassword = (text) => {
    this.setState({ password: text });
  };

  login = async (email, pass) => {
    let user = {
      email: this.state.email,
      password: this.state.password,
    };
    let res = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    let resJson = await res.json();
    if (resJson.token) {
      alert("login success" + resJson.token);

      navigate("Login", { email: this.state.email });
    } else {
      alert("login fail" + resJson.error);
      navigate("Login", { email: this.state.email });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}> Login Here!</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Email"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handleEmail}
        />
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Password"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handlePassword}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.login(this.state.email, this.state.password)}
        >
          <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
        <NativeRouter>
          <Link to="/signup" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>Sign Up Here!!</Text>
          </Link>
          <Route exact path="/signup" component={SignUp} />
          {/* <Link to="/profile" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>Go to your profile</Text>
        //   </Link> */}
          // <Route exact path="/profile" component={Profile} />
        </NativeRouter>
      </View>
    );
  }
}
export default Login;
const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 5,
    padding: 10,
  },
  submitButton: {
    backgroundColor: "#7a42f4",
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: "white",
  },
});
