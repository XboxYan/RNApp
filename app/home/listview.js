/**
 * ViewPager
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ListView,
  ProgressBarAndroid,
  StyleSheet,
  ScrollView,
  TouchableNativeFeedback
} from 'react-native';

import Article from '../common/article';

class LatestList extends Component {
  constructor(props) {
    super(props);
    this.renderNews = this.renderNews.bind(this);
    this.state = {
      loaded: false,
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
      }),
    }
  }
  componentWillMount() {
    let LATEST_URL = this.props.sourse;
    fetch(LATEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          loaded: true,
          dataSource: this.state.dataSource.cloneWithRows(responseData.stories)
        })
      })
      .done();

  }
  renderNews(rowDate) {
    return (
      <TouchableNativeFeedback
        delayPressIn={50}
        onPress={() => this.props.navigator.push({ name: Article ,id:rowDate.id})}
        background={TouchableNativeFeedback.Ripple('#ccc') } >
        <View style={styles.listview}>
          <Text style={styles.listtext}>{rowDate.title}</Text>
          <Image style={styles.listimg} source={{ uri: rowDate.images[0] }} />
        </View>
      </TouchableNativeFeedback>
    )
  }
  render() {
    const { navigator } = this.props;
    if (!this.state.loaded) {
      return (
        <View style={{justifyContent: 'center'}}>
          <Text style={{ marginTop: 10 ,textAlign:'center'}}>正在加载...</Text>
        </View>
      )
    }
    return (
      <View style={styles.content}>
        <Text style={styles.subtitle}>今日要闻</Text>
        <ListView dataSource={this.state.dataSource}
          renderRow={this.renderNews}
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,   
  },
  listview:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:10,
  },
  subtitle:{
    fontSize:18,
    padding:10,
    color:'#1f8eff'
  },
  listtext:{
    fontSize:16,
    lineHeight:26,
    color:'#666',
    flex:1
  },
  listimg:{
    marginLeft:10,
    width:80,
    height:80,
  },
  toptext: {
    color: '#fff',
    fontSize: 16,
  },
  slideview: {
    height: 200
  }
});

module.exports = LatestList