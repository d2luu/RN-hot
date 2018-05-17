import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import { Button } from 'react-native-elements';

export default class Detail extends Component {
  handlePress = () => {
    this.props.navigation.goBack();
  };
  render() {
    return (
      <View style={detail.container}>
        <Image
          style={StyleSheet.absoluteFillObject}
          resizeMode='cover'
          source={{uri: "https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&h=350"}}
        >
        </Image>
        <View style={detail.overlay} />

        <Button
          buttonStyle={detail.button}
          title={"Back to Home"}
          onPress={this.handlePress}
        />
      </View>
    );
  }
}
const detail = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink'
  },
  button: {
    backgroundColor: "rgba(0,0,0,0.2)",
    marginTop: Dimensions.get("window").height * 0.6,
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