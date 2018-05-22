import React, { Component } from 'react';
import {StackNavigator, TabNavigator, DrawerNavigator} from 'react-navigation';
import Home from './screens/Home';
import DogList from './screens/DogList';
import Detail from './screens/Detail';
import Menu from './screens/Menu';
import {Icon} from 'react-native-elements';
import CryptoCoin from './screens/CryptoCoin';

export const HomeStack = StackNavigator({
  Home_Screen: {
    screen: Home,
    navigationOptions: {
      title: "Trang chủ"
    }
  },

  Detail_Screen: {
    screen: Detail,
    navigationOptions: {
      title: "Detail"
    }
  }
});

export const DogListStack = StackNavigator({
  DogList_Screen: {
    screen: DogList,
    navigationOptions: {
      title: "Dog List"
    }
  }
});

export const CoinStack = StackNavigator({
  Coin_Screen: {
    screen: CryptoCoin,
    navigationOptions: {
      title: "Coin List"
    }
  }
});

export const BottomBar = TabNavigator(
{
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: 'HOME',
      tabBarIcon: ({tintColor}) => <Icon name='home' size={30} color={tintColor}/>
    }
  },
  DogList: {
    screen: DogListStack,
    navigationOptions: {
      tabBarLabel: 'DOG LIST',
      tabBarIcon: ({tintColor}) => <Icon name='list' size={30} color={tintColor}/>
    }
  },
  CoinList: {
    screen: CoinStack,
    navigationOptions: {
      tabBarLabel: 'COIN LIST',
      tabBarIcon: ({tintColor}) => <Icon name='stars' size={30} color={tintColor}/>
    }
  }
},
{
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showIcon: true,
    style: {
      backgroundColor: '#dddddd'
    },
    activeTintColor: "red",
    inactiveTintColor: "black",
  },
  swipeEnabled: true
});

export const SideMenu = DrawerNavigator(
  {
    Tabbar: {
      screen: BottomBar
    }
  },
  {
    drawerWidth: 300,
    drawerPosition: 'left',
    contentComponent: props => <Menu {...props}/>
  }
);
