import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Dimensions,
  Platform, Text} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import {updateADog} from '../networking/fetchApi';

let screen = Dimensions.get("window");
export default class EditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: ''
    }
  }

  generateKey = (numberOfChar) => {
    return require('random-string')({length: numberOfChar});
  };

  showEditModal = (editingDog, flatlistItem) => {
    this.setState({
      key: editingDog._id,
      name: editingDog.name,
      description: editingDog.dogDescription,
      flatlistItem: flatlistItem
    });
    this.refs.myModal.open();
  };

  render() {
    return(
      <Modal
        ref={"myModal"}
        style={{
          justifyContent: 'center',
          borderRadius: Platform.OS === "ios" ? 30 : 0,
          shadowRadius: 10,
          width: screen.width - 80,
          height: 280,
        }}
        position={'center'}
        backdrop={true}
        onClosed = {() => {
          // Do something here if modal close
        }}
      >
        <Text style={modal.text}>
          Edit
        </Text>

        <TextInput
          style={modal.textInput}
          placeholder="Change dog's name here"
          value={this.state.name}
          onChangeText={(text) => this.setState({ name: text })}
        />
        <TextInput
          style={modal.textInput}
          placeholder='Change description here'
          value={this.state.description}
          onChangeText={(text) => this.setState({ description: text })}
        />
        <Button
          style={{fontSize: 18, color: 'white'}}
          containerStyle={modal.btn}
          onPress={() => {
            if (this.state.name.length === 0 || this.state.description.length === 0) {
              alert("You must enter Dog name and description!");
              return
            }
            let params = {
              dog_id: this.state.key,
              name: this.state.name,
              dogDescription: this.state.description
            };
            updateADog(params).then((result) => {
              if (result === 'ok') {
                this.state.flatlistItem.refreshFlatListItem({
                  _id: this.state.key,
                  name: this.state.name,
                  dogDescription: this.state.description
                })
              }
              this.refs.myModal.close();
            }).catch((err) => {
              console.error(`Error is: ${err}`);
            });
          }}
        >
          Save
        </Button>

      </Modal>
    )
  }
}

const modal = StyleSheet.create({
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