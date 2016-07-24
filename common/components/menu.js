import React, {Component} from 'react';
import {StyleSheet,Text,View, ListView} from 'react-native';
import Config from '../config.json';
import Login from './login';

export default class Menu extends Component {
    logon(){
        console.log('Menu.logon');
        styles.login.height = 200;
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.titleText}>
                        Menu
                    </Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.itemText}>Item1</Text>
                </View>
                <View style={styles.login}>
                    <Login onClick={this.logon}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        backgroundColor: '#666666'
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
    item: {
        flex: .8,
        backgroundColor: '#00ff00'
    },
    itemText: {
        color: '#ffffff'
    },

    ////////// Login //////////
    login: {
        flex: .1
    }
});