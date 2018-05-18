import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, Dimensions, ScrollView} from 'react-native';
import { Button } from 'react-native-elements';

export default class Detail extends Component {
  handlePress = () => {
    this.props.navigation.goBack();
  };
  render() {
    return (
      <ScrollView contentContainerStyle={detail.container}>
        <Image
          style={[StyleSheet.absoluteFillObject]}
          resizeMode='cover'
          source={{uri: "https://fthmb.tqn.com/Kd_2rehtlDZwUzmpYT4ZWCDCysA=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/lost-dog-58b8c9475f9b58af5c8c7aec.jpg"}}
        >
        </Image>
        <View style={detail.overlay} />

        <Button
          buttonStyle={detail.button}
          title={"Back to Home"}
          onPress={this.handlePress}
        />
      </ScrollView>
    );
  }
}
const detail = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,10,0.1)'
  },
  button: {
    backgroundColor: "rgba(0,0,10,0.5)",
    marginTop: Dimensions.get("window").height * 0.7,
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5,
  },
  text: {
    marginTop: 30,
    fontSize: 30,
    marginBottom: 30
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.2)'
  }
});