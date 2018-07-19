/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Platform} from 'react-native';
import {SideMenu} from './Router';
import OneSignal from 'react-native-onesignal';

const ONESIGNAL_APPID = "5ceaa120-c010-4fef-bfd4-75246165f4c2";

export default class App extends Component {
  componentDidMount() {
    OneSignal.init(ONESIGNAL_APPID);

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
    console.log("Notification received: ", notification);
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  onIds(device) {
    console.log('Device info: ', device);
  }

  render() {
    return (
      <SideMenu uriPrefix={prefix}/>
    );
  }
}

const prefix = Platform.OS == 'android' ? 'mydog://mydog/' : 'mydog://';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
