/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';

import Index from './app/index';

class App extends Component {

  constructor(props) {
    super(props);
  }
  renderScene(route, navigator) {
    let Component = route.name;
    return (
      <Component {...route.prams} navigator={navigator} route={route} />
    );
  }

  render() {
    return (
      <Navigator
        initialRoute = {{ name: Index }}
        configureScene = {(route, routeStack) => Navigator.SceneConfigs.PushFromRight}
        renderScene = {this.renderScene}
        />
    );
  }
}


AppRegistry.registerComponent('App', () => App);
