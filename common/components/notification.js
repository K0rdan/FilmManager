import React, {Component} from 'react';
import {StyleSheet,Modal,Text,View,TouchableHighlight} from 'react-native';

export default class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {modalVisible: true};
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {
        return (
            <Modal transparent={true} visible={this.state.modalVisible} onRequestClose={()=>{}}>
                <View>
                    <Text>Hello World!</Text>
                    <TouchableHighlight onPress={() => {this.setModalVisible(!this.state.modalVisible)}}>
                        <Text>Hide Modal</Text>
                    </TouchableHighlight>
                </View>
            </Modal>
        );
    }
}