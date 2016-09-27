/**
 * index
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  TouchableNativeFeedback,
  Text,
  View,
  Platform,
  BackAndroid,
  PixelRatio,
  ToastAndroid
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from './home/index';
import Favorite from './favorite/index';
import Movie from './movie/index';
import Person from './person/index';

class Tabitem extends Component {
  render() {
    let selected = this.props.selected;
    return (
      <TouchableNativeFeedback
        delayPressIn={0}
        onPress={this.props.onPress}
        background={TouchableNativeFeedback.Ripple('#38f') } >
        <View style={this.props.style}>
          <Icon name={this.props.name} size={24} color={selected ? '#38f' : '#666'} />
          <Text style={[styles.tabText, selected && { color: '#38f' }]}>{this.props.title}</Text>
        </View>
      </TouchableNativeFeedback>
    )
  }
}

class Index extends Component {
  constructor(props) {
    super(props);
    this.onBackAndroid = this.onBackAndroid.bind(this);
    this.state = {
      selectedTab: Home
    }
  }

  componentWillMount() {
    if (Platform.OS === 'android') {
      BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid)
    }
  }

  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid)
    }
  }

  onBackAndroid() {
    const { navigator } = this.props;
    const routers = navigator.getCurrentRoutes();
    if (routers.length > 1) {
      navigator.pop();
      return true;
    }else{
      if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
        return false;
      }
      this.lastBackPressed = Date.now();
      ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
      return true;
    }
  }

  render() {
    let TabContent = this.state.selectedTab;
    const { navigator } = this.props;
    return (
      <View style={styles.content}>
        <View style={styles.content}>
          <TabContent navigator={navigator} />
        </View>
        <View style={styles.tabbar}>
          <Tabitem style={styles.center} name="home" title="主页" selected={TabContent === Home} onPress={() => this.setState({ selectedTab: Home }) } />
          <Tabitem style={styles.center} name="favorite" title="关注" selected={TabContent === Favorite} onPress={() => this.setState({ selectedTab: Favorite }) } />
          <Tabitem style={styles.center} name="movie" title="视频" selected={TabContent === Movie}  onPress={() => this.setState({ selectedTab: Movie }) } />
          <Tabitem style={styles.center} name="person" title="我的" selected={TabContent === Person}  onPress={() => this.setState({ selectedTab: Person }) } />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  tabbar: {
    backgroundColor: '#f1f1f1',
    height: 48,
    flexDirection: 'row',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    fontSize: 10,
    color: '#666'
  },
});

module.exports = Index;
