import React, {Component} from 'react';
import {StyleSheet, Modal, View, TouchableHighlight, Text, ListView} from 'react-native';
import Notification from './notification';

export default class NotificationList extends Component {
    constructor(props){
        super(props);

        this.state = {
            dataSource: this.props.datasource
        };
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

    render() {
        const dataSource = new ListView.DataSource({rowHasChanged: (a, b) => a != b}).cloneWithRows(this.state.dataSource);
        return (
            <Modal transparent={true} onRequestClose={()=>{}} style={styles.container}>
                <View>
                    <TouchableHighlight onPress={this.props.hide}>
                        <Text>Tout fermer</Text>
                    </TouchableHighlight>
                    <ListView dataSource={dataSource} renderRow={(notification) => <Notification data={notification} close={this.closeNotification.bind(this)} />} enableEmptySections={true} />
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    container: {

    }
});