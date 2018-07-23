import React, {Component} from 'react';
import {
  View, Text, StyleSheet, Image, Dimensions, ScrollView, Platform,
  FlatList, TouchableOpacity, TouchableWithoutFeedback,
} from 'react-native';
import {Button} from 'react-native-elements';
import {flatListData} from '../data/flatListData';
import {horizontalStatus} from '../data/flatListData';
import Icon from 'react-native-vector-icons/Ionicons';

class HorizontalFlatListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: this.props.item.status,
    };
  }

  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        width: 100,
        borderColor: 'gray',
        margin: 4,
        borderRadius: 10,
      }}>
        <TouchableWithoutFeedback
          onPress={() => {
            alert(`Dog name is: ${this.props.item.name}`);
          }}
        >
          <Image
            style={{
              height: 100,
              width: 100,
              borderRadius: 10,
            }}
            source={{uri: this.props.item.imageUrl}}
          >
          </Image>
        </TouchableWithoutFeedback>

        <TouchableOpacity
          onPress={() => {
            this.setState(() => {
              if (this.state.status === horizontalStatus.heart) {
                return {status: horizontalStatus.heart_outline};
              }
              return {status: horizontalStatus.heart};
            });
          }}
        >
          <Icon
            name={(Platform.OS === 'ios') ?
              this.state.status.ios :
              this.state.status.android}
            size={50}
            color='red'
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default class Detail extends Component {
  handlePress = () => {
    this.props.navigation.goBack();
  };

  render() {
    let screenWidth = Dimensions.get('window').width;
    let screenHeight = Dimensions.get('window').height;

    return (
      <ScrollView
        contentContainerStyle={detail.container}
      >
        <View style={{
          flex: 1,
          width: screenWidth,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Image
            style={[StyleSheet.absoluteFillObject]}
            resizeMode='cover'
            source={{uri: 'https://fthmb.tqn.com/Kd_2rehtlDZwUzmpYT4ZWCDCysA=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/lost-dog-58b8c9475f9b58af5c8c7aec.jpg'}}
          >
          </Image>
          <View style={detail.overlay}/>

          {/* <Text style={{fontSize: 30, color: 'white', marginTop: 20}}>
            {this.props.navigation.state.params.param}
          </Text> */}
          <Button
            buttonStyle={detail.button}
            title={'Back to Home'}
            onPress={this.handlePress}
          />
          <View style={{height: 170}}>
            <FlatList
              style={{flex: 1}}
              horizontal={true}
              data={flatListData}
              renderItem={({item, index}) => {
                return (
                  <HorizontalFlatListItem
                    item={item}
                    index={index}
                    parentFlatList={this}
                  >
                  </HorizontalFlatListItem>
                );
              }}
              keyExtractor={(item, index) => index.toString()}
            >
            </FlatList>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const detail = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,10,0.1)',
  },
  button: {
    backgroundColor: 'rgba(0,0,10,0.5)',
    marginTop: Dimensions.get('window').height * 0.5,
    marginBottom: 10,
    height: 45,
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 5,
  },
  text: {
    marginTop: 30,
    fontSize: 30,
    marginBottom: 30,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});