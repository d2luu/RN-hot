/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {SideMenu} from './Router';

export default class App extends Component {
  render() {
    return (
      <SideMenu />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
