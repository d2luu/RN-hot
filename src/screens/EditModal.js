import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Dimensions,
  Platform, Text} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListData from '../data/flatListData';

let screen = Dimensions.get("window");
export default class EditModal extends Component {
  constructor(props) {
    super(props);
    // this.showEditModal = this.showEditModal.bind(this);
    this.state = {
      newDog: '',
      description: ''
    }
  }

  generateKey = (numberOfChar) => {
    return require('random-string')({length: numberOfChar});
  };

  showEditModal = (editingDog, flatlistItem) => {
    // console.log(`editing Dog: ${JSON.stringify(editingDog)}`);
    this.setState({
      key: editingDog.key,
      name: editingDog.name,
      country: editingDog.country,
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
          value={this.state.country}
          onChangeText={(text) => this.setState({ country: text })}
        />
        <Button
          style={{fontSize: 18, color: 'white'}}
          containerStyle={modal.btn}
          onPress={() => {
            if (this.state.name.length === 0 ||
              this.state.country.length === 0) {
              alert("You must enter Dog name and description!");
              return;
            }
            let foundIndex = flatListData.findIndex(item => this.state.key == item.key);
            if (foundIndex < 0) return;
            flatListData[foundIndex].name = this.state.name;
            flatListData[foundIndex].country = this.state.country;
            this.state.flatlistItem.refreshFlatListItem();

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