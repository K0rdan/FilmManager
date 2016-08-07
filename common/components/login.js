import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {StyleSheet,Text,View, TouchableNativeFeedback, TextInput} from 'react-native';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    onValidate(){
        console.log("Validate");
    }

    onCancel(){ this.onPress(); }

    onPress() {  
        let tmp = (this.state.open ? false : true);
        this.setState({open: tmp});
        this.props.onPress(tmp);
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
                <View style={styles.formField}>
                    <Text style={{width:75}}>Login</Text>
                    <TextInput style={{flex:1}} placeholder="Type here to translate!" onChangeText={(text) => this.setState({text})}/>
                </View>
                <View style={styles.formField}>
                    <Text style={{width:75}}>Password</Text>
                    <TextInput style={{flex:1}}  onChangeText={(password) => this.setState({password})}/>
                </View>
                <View style={styles.formField}>
                    <TouchableNativeFeedback
                        onPress={this.onValidate.bind(this)}
                        background={TouchableNativeFeedback.Ripple('red', false)}>
                        <View style={{backgroundColor:'red', width:200, height:100}}>
                            <Text>
                                Login 
                            </Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback
                        onPress={this.onCancel.bind(this)}
                        background={TouchableNativeFeedback.Ripple('red', false)}>
                        <View>
                            <Text>
                                Annuler 
                            </Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        );
    }

    render() {
        return (
            <View style={[styles.container, {flex: (this.state.open ? .4: .1)}]}>
                {this.state.open ? this.renderOpen() : this.renderClose()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue'
    },
    containerOpen: {
        flex:1,
        backgroundColor: 'yellow'
    },
    containerClose: {
        flex:1,
        backgroundColor: 'green'
    },
    formField: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});