/**
 * Created by yanmeng on 2018/3/31.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
  ScrollView
} from 'react-native';
import ShopMoreCell from './ShopMoreCell';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class More extends Component<Props> {
  render() {
    return (
        <View style={styles.container}>
          {/*导航条*/}
          {this.renderNavBar()}

            <ScrollView>
                <View style={{marginTop:20}}>
                    <ShopMoreCell
                        title="扫一扫"
                    />
                </View>

                <View style={{marginTop:20}}>
                    <ShopMoreCell
                        title="省流量模式"
                        isSwitch={true}
                    />
                    <ShopMoreCell
                        title="消息提醒"
                    />
                    <ShopMoreCell
                        title="邀请好友使用码团"
                    />
                    <ShopMoreCell
                        title="清空缓存"
                        rightTitle="1.99M"
                    />
                </View>

                <View style={{marginTop:20}}>
                    <ShopMoreCell
                        title="问卷调查"
                    />
                    <ShopMoreCell
                        title="支付帮助"
                    />
                    <ShopMoreCell
                        title="网络诊断"
                    />
                    <ShopMoreCell
                        title="关于码团"
                    />
                    <ShopMoreCell
                        title="我要应聘"
                    />
                </View>

                <View style={{marginTop:20}}>
                    <ShopMoreCell
                        title="精品应用"
                    />
                </View>
            </ScrollView>
        </View>
    );
  };

  // 导航条
  renderNavBar(){
    return(
        <View style={styles.navOutViewStyle}>
            <Text style={{color:'white', fontSize:16, fontWeight:'bold'}}>更多</Text>
            <TouchableOpacity onPress={()=>{alert('点了!')}} style={styles.rightViewStyle}>
                <Image source={{uri: 'icon_mine_setting'}} style={styles.navImageStyle}/>
            </TouchableOpacity>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
