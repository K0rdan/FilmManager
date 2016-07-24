import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Menu from './common/components/menu';

class FilmManager extends Component {
	render() {
    return (
      <View style={styles.container}>
        <View style={{flex:.25}}>
          <Menu />
        </View>
        <Text style={styles.content}>
          Main
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  content: {
    flex: .75
  }
});

AppRegistry.registerComponent('FilmManager', () => FilmManager);
