/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';

// react-navigation Component
import {StackNavigator} from 'react-navigation';
import MainTab from "./component/main/MainTab";
import CardStackStyleInterpolator from "react-navigation/src/views/CardStack/CardStackStyleInterpolator";

type Props = {};
export default class App extends Component<Props> {
  // init method,statemachine
  render() {
    return (
        <Navigator />
    );
  }
}

const RouteConfigs = {
  ShopHomeTab: {
    screen: MainTab,  // screen属性是必须的, 其他都是非必须
    path: 'app/homeTwo', // 使用url导航时用到, 如 web app 和 Deep Linking
    navigationOptions: {}  // 此处设置了, 会覆盖组件内的`static navigationOptions`设置，具体参数详见下文
  },
};

const StackNavigatorConfig = {
  initialRouteName: 'ShopHomeTab',
  initialRouteParams: {initPara: '初始页面参数'},
  navigationOptions: {
    title: '标题',
    headerTitleStyle: {fontSize: 18, color: '#666666'},
    headerStyle: {height: 48, backgroundColor: '#ffffff'},
  },
  path: 'page/main',
  mode: 'card',
  headerMode: 'screen',
  cardStyle: {backgroundColor: "#ffffff"},
  transitionConfig: (() => ({
    screenInterpolator: CardStackStyleInterpolator.forHorizontal,
  })),
  onTransitionStart: (() => {
    console.log('页面跳转动画开始');
  }),
  onTransitionEnd: (() => {
    console.log('页面跳转动画结束');
  }),
};

// navigator
const Navigator = StackNavigator(RouteConfigs, StackNavigatorConfig);