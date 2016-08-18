import React, {Component} from 'react';
import {StyleSheet,Text,View,TouchableNativeFeedback} from 'react-native';
import NotificationType from './notificationType';
import Icon from 'react-native-vector-icons/MaterialIcons';

class NotificationIcon extends Component {
    constructor(props) {
        super(props);

        this.SIZE = 30;
        this.TYPE = 0;
        this.COLOR = "#000";
        if(this.props.type){
            switch(this.props.type){
                case NotificationType.ERROR:    console.log("test");this.TYPE = "error";    this.COLOR = "#900";    break;
                case NotificationType.WARNING:  this.TYPE = "warning";  this.COLOR = "#900";    break;
                case NotificationType.INFO:     this.TYPE = "info";     this.COLOR = "#900";    break;
            }
        }
    }
    render() {
        return (
            <Icon name={this.TYPE} size={this.SIZE} color={this.COLOR} />
        );
    }
}

export default class Notification extends Component {
    render() {
        return (
            <TouchableNativeFeedback
                onPress={() => {this.props.close(this.props.data)}}
                background={TouchableNativeFeedback.Ripple('red', false)}>
                <View style={styles.container}>
                    <NotificationIcon type={this.props.data.type} />
                    <Text style={styles.text}>{this.props.data.msg}</Text>
                </View>
            </TouchableNativeFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        padding:10,
        backgroundColor: '#666'
    },
    text: {
        marginLeft: 10
    }
});