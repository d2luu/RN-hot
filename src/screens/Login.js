import React, {Component} from 'react';
import {StyleSheet,Text,View, Platform} from 'react-native';
import firebase from 'react-native-firebase';

export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: 'red'}}>Test react native firebase</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 34 : 0
  },
});