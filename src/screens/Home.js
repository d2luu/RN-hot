import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Keyboard,
  ScrollView, Image, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      textInput: 'Your text you input here!',
      textPassword: '',
      typeText: 'keyboard state is here!'
    };
  }

  handlePress = () => {
    this.props.navigation.navigate('Detail_Screen', {param: "Hello Luu"})
  };

  handleSideMenu = () => {
    this.props.navigation.openDrawer();
  };

  render() {
    let screeWidth = Dimensions.get("window").width;
    let screeHeight = Dimensions.get("window").height;
    return (
      <ScrollView
        contentContainerStyle={home.container}
      >
        {/*<TextInput
          style={{
            marginTop: 20,
            height: 40,
            width: 300,
            padding: 10,
            borderColor: 'black',
            borderWidth: 1
          }}
          keyboardType='email-address'
          placeholder="Please enter your email"
          onChangeText={
            (text) => {
              this.setState((prevState) => {
                return {
                  textInput: text
                };
              });
            }
          }
        />
        <TextInput
          style={{
            marginTop: 20,
            height: 40,
            width: 300,
            padding: 10,
            borderColor: 'black',
            borderWidth: 1
          }}
          keyboardType='default'
          placeholder="Please enter your email"
          secureTextEntry
          onChangeText={
            (text) => {
              this.setState((prevState) => {
                return {
                  textPassword: text
                };
              });
            }
          }
        />
        <TextInput
          style={{
            marginTop: 20,
            height: 80,
            width: 300,
            padding: 10,
            borderColor: 'black',
            borderWidth: 1
          }}
          keyboardType='default'
          placeholder="Please enter your email"
          secureTextEntry
          multiline
          borderBottomColor="green"
          borderBottonWidth={5}
          borderRightColor="green"
          borderRightWidth={5}
          borderLeftColor="green"
          borderLeftWidth={5}
          editable
          autoFocus
          returnKeyType="done"
          onSubmitEditing={Keyboard.dismiss}
        />
        <Text style={home.text}>
          {this.state.textInput}
        </Text>*/}
        <Image
          style={StyleSheet.absoluteFillObject}
          resizeMode='cover'
          source={{uri: "https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&h=350"}}
        >
        </Image>
        <View style={home.overlay} />
        <View style={{flex: 1, flexDirection: 'row', paddingTop: screeHeight * 0.7}}>
          <Button
            buttonStyle={home.button}
            title={"Go to Detail"}
            onPress={this.handlePress}
          />
          <Button
            buttonStyle={[home.button, home.sideMenu]}
            title={"Go to Menu"}
            onPress={this.handleSideMenu}
          />
        </View>
      </ScrollView>
    );
  }

  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      this.setState(() => {
        return {typeText: 'Keyboard is show!'}
      })
    });
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      this.setState(() => {
        return {typeText: 'Keyboard is hide!'}
      })
    })
  }

  componentWillUnmount() {
    this.keyboardDidHideListener.remove();
    this.keyboardDidShowListener.remove();
  }
}

const home = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
  button: {
    backgroundColor: "rgba(0,0,0,0.2)",
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 16,
    shadowOpacity: 0.5,
    marginBottom: 20,
    padding: 10
  },
  text: {
    fontSize: 30,
    marginBottom: 30,
  },
  sideMenu: {
    backgroundColor: 'rgba(0,0,0,0.2)'
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.2)'
  }
});
