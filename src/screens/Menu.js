import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Menu extends Component {
  render() {
    return (
      <View style={menu.container}>
        <Text>
          Menu
        </Text>
      </View>
    );
  }
}

const menu = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  }
});