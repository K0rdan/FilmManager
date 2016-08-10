import React, {Component} from 'react';
import {Modal, View, TouchableHighlight, Text, ListView} from 'react-native';
import Notification from './notification';

let notifications = [];

export default class NotificationList extends Component {
    constructor(props){
        super(props);

        this.state = {
            isVisible: true
        };
    }

    render() {
        const dataSource = new ListView.DataSource({rowHasChanged: (a, b) => a != b}).cloneWithRows(this.props.datasource);
        return (
            <Modal transparent={true} visible={this.state.isVisible} onRequestClose={()=>{}}>
                <View>
                    <TouchableHighlight onPress={() => {this.setState({isVisible: false})}}>
                        <Text>{notifications.length} notification(s)</Text>
                    </TouchableHighlight>
                    <ListView dataSource={dataSource} renderRow={(notification) => <Notification data={notification} />} enableEmptySections={true} />
                </View>
            </Modal>
        );
    }
}