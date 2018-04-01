/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';

// react-navigation Component
import {StackNavigator} from 'react-navigation';
import ShopHomeTab from "./Component/Home/ShopHomeTab";

type Props = {};
export default class App extends Component<Props> {
  // init method,statemachine
  render() {
    return (
        <Navigator />
    );
  }
}

// navigator
const Navigator = StackNavigator(
    {
      ShopHomeTab: {
        screen: ShopHomeTab
      },
    },
    {
      navigationOptions: {
        title: 'shop',
        headerBackTitle: 'home',
        headerTintColor:'#333333',
        showIcon: true,
        swipeEnabled: false,
        animationEnabled: false,
      },
      mode:'card',
    }
);