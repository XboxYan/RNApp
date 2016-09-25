/**
 * Settings
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  TouchableNativeFeedback,
  Text,
  View,
  Picker,
  Switch,
  Alert,
  PixelRatio,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AppBar from '../common/appbar';

class SetList extends Component {
  render() {
    return (
      <TouchableNativeFeedback
        delayPressIn={50}
        background={TouchableNativeFeedback.Ripple('#ccc') } >
        <View style={this.props.style}>
          <Text style={{ fontSize: 14, color: '#666' }}>{this.props.text}</Text>
          <Icon name="keyboard-arrow-right" size={20} color='#999' />
        </View>
      </TouchableNativeFeedback>
    )
  }
}

class Touchitem extends Component {
  render() {
    return (
      <TouchableNativeFeedback
        delayPressIn={50}
        background={TouchableNativeFeedback.Ripple('#ccc') }
        onPress={this.props.onPress} >
        <View style={this.props.style}>{this.props.children}</View>
      </TouchableNativeFeedback>
    )
  }
}

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option_fontsize: null,
      option_wifi: null,
      switch_listView: false,
      switch_notice:true,
      switch_col:false
    }
  }
  render() {
    const { navigator } = this.props;
    return (
      <View style={styles.content}>
        <AppBar title='设置' navigator={navigator} />
        <ScrollView style={[styles.content, { backgroundColor: '#f1f1f1' }]}>
          <View style={styles.setview}>
            <View style={styles.listwrap}>
              <View style={styles.setlist}>
                <Text style={styles.name}>列表显示摘要</Text>
                <Switch 
                  onValueChange={(value) => this.setState({ switch_listView: value }) }
                  value={this.state.switch_listView}/>
              </View>
              <Touchitem style={styles.setlist}>
                <Text style={styles.name}>字体大小</Text>
                <Text style={styles.subname}>中</Text>
              </Touchitem>
            </View>
            <View style={styles.listwrap}>
              <Touchitem style={styles.setlist}>
                <Text style={styles.name}>非Wifi网络流量</Text>
              </Touchitem>
              <Touchitem style={styles.setlist}>
                <Text style={styles.name}>清除缓存</Text>
                <Text style={styles.subname}>0MB</Text>
              </Touchitem>
            </View>
            <View style={styles.listwrap}>
              <View style={styles.setlist}>
                <Text style={styles.name}>推送通知</Text>
                <Switch 
                  onValueChange={(value) => this.setState({ switch_notice: value }) }
                  value={this.state.switch_notice}/>
              </View>
              <View style={styles.setlist}>
                <Text style={styles.name}>收藏时转发</Text>
                <Switch 
                  onValueChange={(value) => this.setState({ switch_col: value }) }
                  value={this.state.switch_col}/>
              </View>
            </View>
            <View style={styles.listwrap}>
              <Touchitem style={styles.setlist} onPress={()=>Alert.alert('应用更新','已经时最新版本了~')}>
                <Text style={styles.name}>检查新版本</Text>
                <Text style={styles.subname}>1.0.0</Text>
              </Touchitem>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#fff'
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  setview: {

  },
  listwrap: {
    marginTop: 10,
    backgroundColor: '#fff',
  },
  name: {
    color: '#666',
    fontSize: 14
  },
  subname: {
    color: '#999',
    fontSize: 12
  },
  setlist: {
    marginTop: -1 / PixelRatio.get(),
    borderTopWidth: 1 / PixelRatio.get(),
    borderTopColor: '#cecece',
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 10
  }
});

module.exports = Settings;
