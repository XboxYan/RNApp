/**
 * Home
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  PixelRatio,
  StyleSheet
} from 'react-native';
import SlideView from './slideview';
import LatestList from './listview';

let LATEST_URL = 'http://news-at.zhihu.com/api/4/news/latest';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigator } = this.props;
    return (
      <View style={styles.content}>
        <View style={styles.top}><Text style={styles.toptext}>主页</Text></View>
        <ScrollView style={styles.content}>
          <View  style={styles.slideview}>
            <SlideView
              navigator={navigator}
              sourse = {LATEST_URL}
              isLoop={true} />
          </View>
          <LatestList sourse = {LATEST_URL} navigator={navigator}  />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  top: {
    backgroundColor: '#1f8eff',
    height: 50,
    justifyContent: 'center',
    paddingLeft: 20
  },
  toptext: {
    color: '#fff',
    fontSize: 16,
  },
  slideview: {
    height: 200,
  }
});

module.exports = Home;