/**
 * ViewPager
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import ViewPager from 'react-native-viewpager';
import Article from '../common/article';

class SlideView extends Component {
  constructor(props) {
    super(props);
    this.renderPage = this.renderPage.bind(this);
    this.state = {
      dataSource: new ViewPager.DataSource({
        pageHasChanged: (p1, p2) => p1 !== p2,
      }),
    }
  }
  componentWillMount() {
    let LATEST_URL = this.props.sourse;
    fetch(LATEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithPages(responseData.top_stories)
        })
      })
      .done();

  }
  renderPage(data) {
    return (
      <TouchableOpacity 
        activeOpacity={.8}
        onPress={() => this.props.navigator.push({ name: Article ,id:data.id})}
        style={styles.content}>
        <View style={styles.content}>
          <Image
            source={{ uri: data.image }}
            style={styles.content}
            />
          <View style={styles.mask}></View>
          <Text style={styles.slidetitle}>{data.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  render() {
    const { navigator } = this.props;
    return (
      <ViewPager style={this.props.style}
        dataSource={this.state.dataSource}
        initialPage={0}
        renderPage={this.renderPage}
        autoPlay={this.props.autoPlay}
        isLoop={this.props.isLoop}
        />
    )
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1
  },
  slidetitle: {
    color: '#fff',
    fontSize:20,
    lineHeight:30,
    position: 'absolute',
    right: 10,
    bottom: 20,
    left:10,
    zIndex:2
  },
  mask:{
    position: 'absolute',
    right: 0,
    bottom: 0,
    top:0,
    left:0,
    zIndex:1,
    backgroundColor:'rgba(0,0,0,.3)'
  }
});

module.exports = SlideView