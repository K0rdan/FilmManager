import React, {Component} from 'react';
import {StyleSheet,Text,View} from 'react-native';
import Config from '../config.json';
import Login from './login';
import NotificationType from './notification/notificationType';

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
        let notifications = {
            error: 0,
            warning: 0,
            info: 0
        };

        if(this.props.notificationList){
            let notifs = this.props.notificationList;
            for(let i=0; i<notifs.length; i++) {
                switch(notifs.type) {
                    case NotificationType.ERROR: notifications.error++; break;
                    case NotificationType.WARNING: notifications.warning++; break;
                    case NotificationType.INFO: notifications.info++; break;
                }
            }
        }

        return (
            <View style={styles.container}>
                <View style={{flex:1,flexDirection: 'column',backgroundColor: '#666666'}}>
                    <View style={{flex:.1}}>
                        <Text style={styles.titleText}>
                            Menu
                        </Text>
                        <Text>Notifications (e:{notifications.error}, w:{notifications.warning}, i:{notifications.info})</Text>
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