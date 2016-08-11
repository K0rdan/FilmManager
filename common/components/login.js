import React, {Component} from 'react';
import {StyleSheet,Text,View, TouchableNativeFeedback, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import NotificationType from './notification/notificationType';
import Error from './../error';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    onValidate(){
        if(!this.state.login || !this.state.password){
            // Show a notification
            let notification = {
                type: NotificationType.ERROR,
                msg: Error.LOGIN.EMPTY
            }
            this.props.notificationList.notifications.push(notification);
            this.props.notificationList.show();
        }
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
                    <View style={styles.openButton}>
                        <Text style={styles.openButtonText}>Login</Text>
                        <Icon name="md-power" size={30} color="#000000" />
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }

    renderOpen() {
        return (
            <View style={styles.containerOpen}>
                <View style={stylesOpen.header}>
                    <Text style={stylesOpen.headerText}>Login</Text>
                </View>
                <View style={stylesOpen.formField}>
                    <Text style={stylesOpen.formFieldText}>Identifiant</Text>
                    <TextInput style={{flex:1}} onChangeText={(text) => this.setState({login: text})}/>
                </View>
                <View style={stylesOpen.formField}>
                    <Text style={stylesOpen.formFieldText}>Password</Text>
                    <TextInput style={{flex:1}}  onChangeText={(password) => this.setState({password: password})}/>
                </View>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                    <TouchableNativeFeedback
                        onPress={this.onValidate.bind(this)}
                        background={TouchableNativeFeedback.Ripple('red', false)}>
                        <View style={{flex:.5, borderRightColor:'#000', borderRightWidth:1}}>
                            <Text style={{textAlign:'center', fontWeight:'bold'}}>Connexion</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback
                        onPress={this.onCancel.bind(this)}
                        background={TouchableNativeFeedback.Ripple('red', false)}>
                        <View style={{flex:.5, borderLeftColor:'#000', borderLeftWidth:1}}>
                            <Text style={{textAlign:'center', fontWeight:'bold'}}>Annuler</Text>
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
        backgroundColor: '#CCCCCC'
    },
    containerClose: {
        flex:1,
        backgroundColor: '#CCCCCC'
    },
    openButton: {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'center'
    },
    openButtonText: {
        color: '#000000',
        fontSize: 30,
        marginRight: 10
    }
});

const stylesOpen = StyleSheet.create({
    header: {flexDirection:'row',justifyContent:'center'},
    headerText: {color:'#000000',fontSize:25},
    formField: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#999',
        borderTopColor:'#000',
        borderTopWidth:1
    },
    formFieldText: {width:75}
});