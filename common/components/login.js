import React, {Component} from 'react';
import {StyleSheet,Text,View, TouchableNativeFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableNativeFeedback
                    onPress={this.props.onClick}
                    background={TouchableNativeFeedback.Ripple('red', false)}>
                    <View style={styles.container}>
                        <Text style={styles.loginText}>
                            Login
                        </Text>
                        <Icon name="md-power" size={30} color="#fff"/>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginText: {
        fontSize: 25,
        marginRight: 10,
        color: '#fff'
    }    
});