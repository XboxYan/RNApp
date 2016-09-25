/**
 * Person
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  TouchableNativeFeedback,
  Text,
  View,
  PixelRatio,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Settings from './settings';

class UserSet extends Component {
  render() {
    return (
      <TouchableNativeFeedback
        delayPressIn={50}
        background={TouchableNativeFeedback.Ripple('#ccc') } 
        onPress={this.props.onPress} >       
        <View style={[this.props.style, { paddingTop: 20, paddingBottom: 20, }]}>
          <Icon name={this.props.name} size={30} color={this.props.color} />
          <Text style={[styles.tabText, { fontSize: 12, marginTop: 5 }]}>{this.props.title}</Text>
        </View>
      </TouchableNativeFeedback>
    )
  }
}

class SetList extends Component {
  render() {
    return (
      <TouchableNativeFeedback
        delayPressIn={0}
        background={TouchableNativeFeedback.Ripple('#ccc') } >
        <View style={this.props.style}>
          <Text style={{fontSize:14,color:'#666'}}>{this.props.text}</Text>
          <Icon name="keyboard-arrow-right" size={20} color='#999' />
        </View>
      </TouchableNativeFeedback>
    )
  }
}

class Person extends Component {
  render() {
    const { navigator } = this.props;
    return (
      <View style={styles.content}>
        <View style={styles.usertop}>
          <Icon name='face' size={80} color='#fff' />
          <Text style={styles.username}>我的</Text>
        </View>
        <ScrollView style={styles.content}>
          <View style={styles.userlink}>
            <UserSet style={styles.center} name="star" title="收藏" color="#eda358" />
            <UserSet style={styles.center} name="watch-later" title="最近" color="#6b8dee" />
            <UserSet style={styles.center} name="settings" title="设置" color="#ef6b92" onPress={() => this.props.navigator.push({ name: Settings })} />
          </View>
          <View style={styles.settings}>
            <SetList style={styles.setlist} text="消息通知" />
            <SetList style={styles.setlist} text="离线缓存" />
            <SetList style={styles.setlist} text="活动" />
            <SetList style={styles.setlist} text="商城" />
            <SetList style={styles.setlist} text="反馈" />
            <SetList style={styles.setlist} text="关于" />
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor:'#fff'
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  usertop: {
    height: 200,
    backgroundColor: '#1f8eff',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  username: {
    color: '#fff',
    fontSize: 18,
    marginTop: 10
  },
  userlink: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth:10,
    borderBottomColor:'#f1f1f1',
    zIndex:2
  },
  settings: {
    marginTop:-1/PixelRatio.get(),
    
  },
  setlist: {
    borderTopWidth:1/PixelRatio.get(),
    borderTopColor:'#cecece',
    flexDirection:'row',
    height:50,
    alignItems:'center',
    justifyContent:'space-between',
    paddingLeft:15,
    paddingRight:10
  }
});

module.exports = Person;
