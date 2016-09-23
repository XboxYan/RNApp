/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
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
  ToastAndroid
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Tabitem extends Component {
  render() {
    let selected = this.props.selected;
    return (
      <TouchableNativeFeedback
        delayPressIn={0}
        style={this.props.style}
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

class UserSet extends Component {
  render() {
    return (
      <TouchableNativeFeedback
        delayPressIn={0}
        style={this.props.style}
        background={TouchableNativeFeedback.Ripple('#38f') } >
        <View style={styles.content}>
          <Icon name={this.props.name} size={24} color='#666' />
          <Text style={styles.tabText}>{this.props.title}</Text>
        </View>
      </TouchableNativeFeedback>
    )
  }
}

class Home extends Component {
  render() {
    return (
      <View><Text>主页12</Text></View>
    )
  }
}

class Favorite extends Component {
  render() {
    return (
      <View><Text>关注2</Text></View>
    )
  }
}

class Movie extends Component {
  render() {
    return (
      <View><Text>视频3</Text></View>
    )
  }
}

class Person extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.usertop}>
          <Icon name='face' size={80} color='#fff' />
          <Text style={styles.username}>我的1</Text>
        </View>
        <View>
          <View style={styles.content}>
            <UserSet name="home" title="主页" />
            <UserSet name="home" title="主页" />
            <UserSet name="home" title="主页" />
          </View>
        </View>
      </ScrollView>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.onBackAndroid = this.onBackAndroid.bind(this);
    this.state = {
      selectedTab: Person
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
    if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
      return false;
    }
    this.lastBackPressed = Date.now();
    ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
    return true;
  }

  render() {
    let TabContent = this.state.selectedTab;
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <TabContent />
        </View>
        <View style={styles.tabbar}>
          <Tabitem style={styles.tabitem} name="home" title="主页" selected={TabContent === Home} onPress={() => this.setState({ selectedTab: Home }) } />
          <Tabitem style={styles.tabitem} name="favorite" title="关注" selected={TabContent === Favorite} onPress={() => this.setState({ selectedTab: Favorite }) } />
          <Tabitem style={styles.tabitem} name="movie" title="视频" selected={TabContent === Movie}  onPress={() => this.setState({ selectedTab: Movie }) } />
          <Tabitem style={styles.tabitem} name="person" title="我的" selected={TabContent === Person}  onPress={() => this.setState({ selectedTab: Person }) } />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
  },
  tabbar: {
    backgroundColor: '#f1f1f1',
    height: 48,
    flexDirection: 'row',
  },
  tabitem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    fontSize: 10,
    color: '#666'
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
  }
});

AppRegistry.registerComponent('App', () => App);
