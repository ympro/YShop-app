/**
 * Created by yanmeng on 2018/4/1.
 */
import React, {Component} from 'react';

import {
  TabNavigator,
  TabBarBottom,
} from 'react-navigation';

import Home from '../screan/home/ShopHome'
import Merchant from '../screan/merchant/ShopMerchant'
import Mine from  '../screan/mine/ShopMine'
import More from '../screan/more/ShopMore'
import TabBarItem from "./TabBarItem";

type Props = {};
export default class MainTab extends Component<Props> {
  // init method,statemachine
  render() {
    return (
        <Tab />
    );
  }
}

const RouteConfigs = {
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: '首页',
      tabBarIcon: ({focused, tintColor}) => (
          <TabBarItem
              tintColor={tintColor}
              focused={focused}
              normalImage={{url: 'icon_tabbar_homepage'}}
              selectedImage={{url: 'icon_tabbar_homepage_selected'}}
          />
      )
    }),
  },
  Merchant: {
    screen: Merchant,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: '商户',
      tabBarIcon: ({focused, tintColor}) => (
          <TabBarItem
              tintColor={tintColor}
              focused={focused}
              normalImage={{url: 'icon_tabbar_merchant_normal'}}
              selectedImage={{url: 'icon_tabbar_merchant_selected'}}
          />
      )
    }),
  },
  Mine: {
    screen: Mine,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: '我',
      tabBarIcon: ({focused, tintColor}) => (
          <TabBarItem
              tintColor={tintColor}
              focused={focused}
              normalImage={{url: 'icon_tabbar_mine'}}
              selectedImage={{url: 'icon_tabbar_mine_selected'}}
          />
      )
    }),
  },
  More: {
    screen: More,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: '更多',
      tabBarIcon: ({focused, tintColor}) => (
          <TabBarItem
              tintColor={tintColor}
              focused={focused}
              normalImage={{url: 'icon_tabbar_misc'}}
              selectedImage={{url: 'icon_tabbar_misc_selected'}}
          />
      )
    }),
  },
};

const  TabNavigatorConfig = {
  tabBarComponent: TabBarBottom,
  animationEnabled: true, // 切换页面时是否显示动画
  tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
  swipeEnabled: false, // 是否左右滑动,如果有DrawerNavigator,最好设置为false避免手势冲突
  backBehavior: 'initailRoute', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
  tabBarOptions: {
    activeTintColor: '#06c1ae', // 文字和图片选中颜色
    inactiveTintColor: '#979797', // 文字和图片默认颜色
    showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
    indicatorStyle: {height: 0}, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了， 不知道还有没有其它方法隐藏？？？
    style: {
      backgroundColor: '#ffffff', // TabBar 背景色
      height:50
    },
    labelStyle: {
      fontSize: 12, // 文字大小,
      marginTop: 0,
    },
  },
};

const Tab = TabNavigator(RouteConfigs, TabNavigatorConfig);
