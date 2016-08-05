import React, {Component} from 'react';
import {StyleSheet,Text,View, TouchableNativeFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    onPress() {
        this.setState({open: !this.state.open});
        console.log("open", this.state.open);
    }

    renderClose() {
        return (
            <View style={styles.containerClose}>
                <TouchableNativeFeedback
                    onPress={this.onPress.bind(this)}
                    background={TouchableNativeFeedback.Ripple('red', false)}>
                    <View>
                        <Text>
                            Login
                        </Text>
                        <Icon name="md-power" size={30} color="#fff" />
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }

    renderOpen() {
        return (
            <View style={styles.containerOpen}>
                <Text>
                    Login open
                </Text>
            </View>
        );
    }

    render() {
        return (
            <View>
                {this.state.open ? this.renderOpen() : this.renderClose()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerOpen: {
        flex: 1,
        backgroundColor: 'yellow'
    },
    containerClose: {
        flex: .5,
        backgroundColor: 'green'
    }
});