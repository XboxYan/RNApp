/**
 * index
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableNativeFeedback,
  Text,
  View,
  PixelRatio,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class AppBar extends Component {

  render() {
    const { navigator } = this.props;
    return (
      <View style={styles.appbar}>
        <TouchableNativeFeedback 
          delayPressIn={0}
          onPress={()=>this.props.navigator.pop()}
          background={TouchableNativeFeedback.Ripple('#ccc') } >
          <View style={styles.btn}><Icon name='arrow-back' size={24} color='#fff' /></View>
        </TouchableNativeFeedback>
        <Text style={styles.apptitle}>{this.props.title||''}</Text>
        <View style={styles.btn}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appbar: {
    backgroundColor: '#1f8eff',
    flexDirection: 'row',
    alignItems:'center',
  },
  btn:{
    width:50,
    height:50,
    zIndex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  apptitle:{
    textAlign:'center',
    flex:1,
    fontSize:16,
    color:'#fff'
  }

});

module.exports = AppBar;
