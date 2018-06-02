import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Dimensions,
        Platform, Text} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import {insertNewDogToServer} from '../networking/fetchApi';

let screen = Dimensions.get("window");
export default class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newDog: '',
      description: ''
    };
    this.showAddModal = this.showAddModal.bind(this)    
  }

  generateKey = (numberOfChar) => {
    return require('random-string')({length: numberOfChar});
  };

  showAddModal = () => {
    this.refs.myModal.open();
  };

  render() {
    return(
      <Modal
        ref={"myModal"}
        style={modal.container}
        position={'center'}
        backdrop={true}
        onClosed = {() => {
          // Do something here if modal close
        }}
      >
        <Text style={modal.text}>
          Add New Dog
        </Text>

        <TextInput
          style={modal.textInput}
          placeholder='Add new dog here'
          value={this.state.newDog}
          onChangeText={(text) => this.setState({ newDog: text })}
        />
        <TextInput
          style={modal.textInput}
          placeholder='Add description here'
          value={this.state.description}
          onChangeText={(text) => this.setState({ description: text })}
        />
        <Button
          style={{fontSize: 18, color: 'white'}}
          containerStyle={modal.btn}
          onPress={() => {
            if (this.state.newDog.length === 0 || this.state.description.length === 0) {
              alert("You must enter Dog name and description!");
              return
            }
            const newKey = this.generateKey(4);
            const newDog = {
              key: newKey,
              name: this.state.newDog,
              dogDescription: this.state.description,
              // url: 'https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Natural-Dog-Law-2-To-dogs%2C-energy-is-everything.jpg?itok=Z-ujUOUr',
            };
            insertNewDogToServer(newDog).then((result) => {
              if (result === 'ok') {
                this.props.parentFlatList.refreshDataFromServer();
              } else if (result === 'failed') {
                console.log("Insert Failed!");
              }
            });
            this.refs.myModal.close();
          }}
        >
          Save
        </Button>

      </Modal>
    )
  }
}

const modal = StyleSheet.create({
  container: {
    justifyContent: 'center',
    borderRadius: Platform.OS === "ios" ? 30 : 0,
    shadowRadius: 10,
    width: screen.width - 80,
    height: 280,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40
  },
  textInput: {
    height: 40,
    borderBottomColor: 'gray',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    marginBottom: 10,
    borderBottomWidth: 1,
  },
  btn: {
    padding: 8,
    marginLeft: 70,
    marginRight: 70,
    height: 40,
    borderRadius: 6,
    backgroundColor: 'mediumseagreen'
  }

});