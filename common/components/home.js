import React, {Component} from 'react';
import {StyleSheet,Text,View} from 'react-native';
import Menu from './menu';

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Menu navigator={this.props.navigator} notification={this.props.notification}/>
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