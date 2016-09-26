/**
 * ViewPager
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  Animated,
  Easing
} from 'react-native';
import ViewPager from 'react-native-viewpager';

let deviceWidth = Dimensions.get('window').width;


class SlideView extends Component {
  constructor(props) {
    super(props);
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
      <Image
        source={{ uri: data.image }}
        style={{ width: deviceWidth,height:deviceWidth,marginTop:(200-deviceWidth)/2}} />
    );
  }
  render() {
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

module.exports = SlideView