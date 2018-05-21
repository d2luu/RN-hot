import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Icon} from 'react-native-elements';

export default class Menu extends Component {
  render() {
    return (
      <View style={menu.container}>
        <Icon name='menu' size={30} color={'black'} />
        <Text style={{color: 'black', fontSize: 30}}>
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
    backgroundColor: 'rgba(255,255,0,0.1)'
  }
});