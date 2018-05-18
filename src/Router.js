import React, { Component } from 'react';
import {StackNavigator, TabNavigator, DrawerNavigator} from 'react-navigation';
import Home from './screens/Home';
import DogList from './screens/DogList';
import Detail from './screens/Detail';
import Menu from './screens/Menu';
import {Icon} from 'react-native-elements';

export const HomeStack = StackNavigator({
  Home_Screen: {
    screen: Home,
    navigationOptions: {
      title: "Trang chu"
    }
  },

  Detail_Screen: {
    screen: Detail,
    navigationOptions: {
      title: "Detail"
    }
  }
});

export const UserStack = StackNavigator({
  User_Screen: {
    screen: DogList,
    navigationOptions: {
      title: "Dog List"
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
  User: {
    screen: UserStack,
    navigationOptions: {
      tabBarLabel: 'DOG LIST',
      tabBarIcon: ({tintColor}) => <Icon name='list' size={30} color={tintColor}/>
    }
  }
},
{
  tabBarPosition: 'bottom',
  tabBarOptions: {
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
