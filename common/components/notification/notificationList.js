import React, {Component} from 'react';
import {
    StyleSheet,
    PanResponder,
    Animated,
    View,
    TouchableHighlight,
    Text,
    ListView,
    TouchableOpacity,
    LayoutAnimation,
    Platform,
    UIManager
} from 'react-native';
import Notification from './notification';

export default class NotificationList extends Component {
    constructor(props){
        super(props);

        this.state = {
            dataSource: this.props.datasource,
            open: true
        };

        if(Platform.OS === 'android')
            UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    componentWillMount() {
        // We are opening the notification list
        if(this.state.open)
            LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    }

    componentDidUpdate() {
        // We are closing all notifications
        if(!this.state.open){
            for(let i=0;i<this.props.datasource.length;i++)
                this.closeNotification(this.props.datasource[i]);
        }
    }

    render() {
        const dataSource = new ListView.DataSource({rowHasChanged: (a, b) => a != b}).cloneWithRows(this.state.dataSource);
        return (
            <View style={[styles.container, {height:(this.state.open ? 400 : 0)}]}>
                <TouchableHighlight onPress={this.closeAllNotifications.bind(this)}>
                    <Text>Tout fermer</Text>
                </TouchableHighlight>
                <ListView dataSource={dataSource} renderRow={
                    (notification) => {
                        return (<Notification data={notification} close={this.closeNotification.bind(this)} />);
                    }
                } enableEmptySections={true} />
            </View>
        );
    }

    ///// CUSTOM METHODS /////
    closeAllNotifications() {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
        this.setState({open: false});
    }

    closeNotification(notification) {
        let notifications = this.props.datasource;

        // Delete the notification passed through parameter.
        for(let i=0; i<notifications.length; i++){
            if(notifications[i] == notification) {
                notifications.splice(i, 1);
                break;
            }
        }

        // Hide the notification list if there is 0 notification left.
        if(notifications.length == 0)
            this.props.hide();

        this.setState({dataSource: notifications});
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width:400,
        top:0,
        backgroundColor: 'red',
        zIndex: 999
    },
    topButtons: {
        marginTop: 22,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        backgroundColor: 'lightblue'
    },
    button: {
        flex: 1,
        height: 60,
        alignSelf: 'stretch',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 8
    },
    content: {
        flex: 1,
        alignSelf: 'stretch'
    }
});