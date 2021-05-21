import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      contents: [],
     
    };
  }


  addContent = (content) => {
    this.state.contents.push(content);
    this.setState({ contents: this.state.contents });
 
  };

  deleteContent = (index) => {
    console.log(index);
    this.state.contents.splice(index, 1);
    this.setState({ contents: this.state.contents });
  };


  render() {
    return (
      <View>
        <Text style={{ textAlign: "center" }}>To Do List</Text>
        <View>
          <DisplayTasks
            contents={this.state.contents}
           
            deleteContent={this.deleteContent}
           
          />
        </View>
        <AddTask style={{ textAlign: "center" }} addContent={this.addContent} />
      </View>
    );
  }
}

class AddTask extends React.Component {
  constructor(props) {
    super();
    this.state = {
      content: "",
    };
  }

  addContent = () => {
    let content = {
      content: this.state.content,
    };

    this.props.addContent(content);
  };

  render() {
    return (
      <View>
        <Text>Task : </Text>
        <TextInput
          style={styles.input}
          value={this.state.content}
          onChangeText={(e) => this.setState({ content: e })}
        />
        <Button
          onPress={() => this.addContent()}
          className="btn btn-primary "
          style={{ margin: 30 }}
          title="Add"
        ></Button>
      </View>
    );
  }
}

class DisplayTasks extends React.Component {
  constructor(props) {
    super();
  }

  render() {
   
    {
      let task = this.props.contents.map((item, index) => {
      
        return (
          <Text>
   
            <Button
              onPress={() => {
                this.props.deleteContent(index);
              }}
              title="Delete"
            >
     
            </Button>
            {item.content}
          </Text>
        );
      });
      console.log(task);
      return <View>{task}</View>;
    }

    // );
  }
}

DisplayTasks.defaultProps = {
  contents: [],
};

class DisplayTask extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return <View>
        
    </View>;
  }
}




const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#9900ff",
    borderWidth: 5,
    padding: 10,
  },
  submitButton: {
    backgroundColor: "#9900ff",
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: "white",
  },
});
export default Todo;