import React, {Component} from 'react';
import {StyleSheet,Text,View,TouchableNativeFeedback} from 'react-native';

export default class Notification extends Component {
    render() {
        return (
            <View style={style.container}>
                <Text>{this.props.data.msg}</Text>
                <TouchableNativeFeedback
                    onPress={() => {this.props.close(this.props.data)}}
                    background={TouchableNativeFeedback.Ripple('red', false)}>
                    <View style={{backgroundColor:'black'}}>
                        <Text>
                            Fermer
                        </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        height: 100,
        backgroundColor: 'blue'
    }
});