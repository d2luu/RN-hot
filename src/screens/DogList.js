import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image, ScrollView, Alert, Platform,
          TouchableHighlight } from 'react-native';
import {flatListData} from '../data/flatListData';
import Swipeout from 'react-native-swipeout';
import AddModal from './AddModal';
import EditModal from './EditModal';

export default class DogList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deletedRowKey: null,
    };
    this._handlePress = this._handlePress.bind(this);
    this.addModal = React.createRef();
    this.editModal = React.createRef();
  }

  _handlePress() {
    this.addModal.current.showAddModal();
  }

  refreshFlatList = (activeKey) => {
    this.setState((prevState) => {
      return {deletedRowKey: activeKey}
    });
    this.refs.flatList.scrollToEnd();
  };

  render() {
    let touchableHighlightSetting = {
      style: {marginRight: 10, borderRadius: 16, shadowOpacity: 0.5,},
      underlayColor: "gray",
      onPress: this._handlePress
    }
    return (
      <View style={user.container}>
        <View style={user.list}>
          <TouchableHighlight {...touchableHighlightSetting}>
            <Image
              style={{width: 45, height: 45}}
              source={require("../img/btn-add.png")}
            />
            {/* <Text>
              Add new dog
            </Text> */}
          </TouchableHighlight>
        </View>
        <FlatList
          ref={'flatList'}
          style={user.flatList}
          data={flatListData}
          renderItem={({item, index}) => {
            return (
              <FlatListItem
                item={item}
                index={index}
                parentFlatList={this}
              />
            )
          }}
          keyExtractor={(item, index) => index.toString()}
        >
        </FlatList>

        <AddModal ref={this.addModal} parentFlatList={this}>
        </AddModal>

        <EditModal ref={this.editModal} parentFlatList={this}>
        </EditModal>
      </View>
    );
  }
}


export class FlatListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRowKey: null,
      numOfRefresh: 0      
    }
  }

  refreshFlatListItem = () => {
    this.setState((prevState) => {
      return {numOfRefresh: prevState.numOfRefresh + 1}
    });
  };

  render() {
    const swipeSetting = {
      autoClose: true,
      onClose: (secId, rowId, direction) => {
        if(this.state.activeRowKey != null) {
          this.setState({activeRowKey: null});
        }
      },
      onOpen: (secId, rowId, direction) => {
        this.setState({activeRowKey: this.props.item.key});
      },
      right: [
        {
          onPress: () => {
            this.props.parentFlatList.editModal.current.showEditModal(flatListData[this.props.index], this)
          },
          text: 'Edit', type: 'primary'
        },
        {
          onPress: () => {
            const deletingRow = this.state.activeRowKey;
            Alert.alert(
              '警報',
              '消去してもよろしいですか?',
              [
                {text: 'いいえ', onPress: () => console.log("Cancel Pressed"), style: 'cancel'},
                {text: 'はい', onPress: () => {
                    flatListData.splice(this.props.index, 1);
                    this.props.parentFlatList.refreshFlatList(deletingRow);
                  }
                }
              ],
              {cancelable: false}
            );
        },
          text: 'Delete', type: 'delete'
      }],
      rowId: this.props.index,
      sectionID: 1
    };
    return(
      <Swipeout {...swipeSetting}>
        <View style={{flexDirection: 'column', flex: 1}}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              backgroundColor: "rgba(255,255,255,0.1)",
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 5,
              shadowOpacity: 0.5,
            }}
          >
            <Image
              source={{uri: this.props.item.imageUrl}}
              style={{width: 100, height: 100, margin: 5}}
            />

            <ScrollView style={user.flatItem} >
              <Text style={user.dogName} children={this.props.item.name}/>
              <Text style={user.flastListItem} children={this.props.item.country}/>
            </ScrollView>
          </View>

          <View style={{height: 2, backgroundColor: "white"}} />
        </View>
      </Swipeout>
    )
  }
}

const user = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 30,
    marginBottom: 30
  },
  flatList: {
    flex: 1,
  },
  flastListItem: {
    color: "black",
    padding: 10,
    fontSize: 15,
    alignItems: "stretch",
  },
  dogName: {
    color: "black",
    padding: 10,
    fontSize: 15,
    alignItems: "stretch",
    fontWeight: 'bold'
  },
  flatItem: {
    flex: 1,
    flexDirection: "column",
    height: 100,
  },
  list: {
    backgroundColor: 'white',
    height: 54,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
});