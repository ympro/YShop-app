/**
 * Created by yanmeng on 2018/4/1.
 */
import React,{Component} from 'react';
import {Image} from 'react-native';

type Props = {};
export default class TabBarItem extends Component<Props> {
  render() {
    return(
      <Image source={ this.props.focused ? this.props.selectedImage : this.props.normalImage }
             style={ { tintColor:this.props.tintColor,width:25,height:25 } }
      />
    )
  }
}