import React, { Component } from 'react';
import {createStackNavigator, createBottomTabNavigator, createDrawerNavigator} from 'react-navigation';
import Home from './screens/Home';
import DogList from './screens/DogList';
import Detail from './screens/Detail';
import Menu from './screens/Menu';
import {Icon} from 'react-native-elements';
import CryptoCoin from './screens/CryptoCoin';

export const HomeStack = createStackNavigator({
  Home_Screen: {
    screen: Home,
    navigationOptions: {
      title: "Trang chủ"
    },
    path: 'main'
  },

  Detail_Screen: {
    screen: Detail,
    navigationOptions: {
      title: "Detail"
    },
    path: 'detail'
  }
});

export const DogListStack = createStackNavigator({
  DogList_Screen: {
    screen: DogList,
    navigationOptions: {
      title: "Dog List"
    },
    path: 'doglist'
  }
});

export const CoinStack = createStackNavigator({
  Coin_Screen: {
    screen: CryptoCoin,
    navigationOptions: {
      title: "Coin List"
    },
    path: 'coinlist'
  }
});

export const BottomBar = createBottomTabNavigator(
{
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: 'HOME',
      tabBarIcon: ({tintColor}) => <Icon name='home' size={30} color={tintColor}/>
    }
  },
  CoinList: {
    screen: CoinStack,
    navigationOptions: {
      tabBarLabel: 'COIN LIST',
      tabBarIcon: ({tintColor}) => <Icon name='stars' size={30} color={tintColor}/>
    }
  },
  DogList: {
    screen: DogListStack,
    navigationOptions: {
      tabBarLabel: 'DOG LIST',
      tabBarIcon: ({tintColor}) => <Icon name='list' size={30} color={tintColor}/>
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

export const SideMenu = createDrawerNavigator(
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
