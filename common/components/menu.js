import React, {Component} from 'react';
import {StyleSheet,Text,View} from 'react-native';
import Config from '../config.json';
import Login from './login';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            loginOpen: false
        };
    }

    onPressLogin(isOpen) {
        this.setState({
            loginOpen: isOpen
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{flex:1,flexDirection: 'column',backgroundColor: '#666666'}}>
                    <View style={{flex:.1}}>
                        <Text style={styles.titleText}>
                            Menu
                        </Text>
                    </View>
                    <View style={[styles.items, {flex: (this.state.loginOpen ? .5 : .8)}]}>
                        <Text style={styles.itemText}>Item1</Text>
                    </View>
                    <Login navigator={this.props.navigator} notificationList={this.props.notificationList} onPress={this.onPressLogin.bind(this)}/>
                </View>
            </View>           
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:.25,
    },

    ////////// Title //////////
    title: {
        flex: .1,
        backgroundColor: '#0000ff',
    },
    titleText: {
        textAlign: 'center',
        color: '#ffffff'
    },

    ////////// Item //////////
    items: {
        backgroundColor: '#00ff00'
    },
    itemText: {
        color: '#ffffff'
    }
});