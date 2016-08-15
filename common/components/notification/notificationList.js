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
            pan: new Animated.ValueXY(),
            index: 0,
        };

        if(Platform.OS === 'android')
            UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    onPress(index) {
        // Uncomment to animate the next state change.
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        this.setState({index: index});
    }

    renderButton(index) {
        return (
            <TouchableOpacity key={'button' + index} style={styles.button} onPress={() => this.onPress(index)}>
            <Text>{index}</Text>
            </TouchableOpacity>
        );
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

        var leftStyle = this.state.index === 0 ? {flex: 1} : {width: 20};
        var middleStyle = this.state.index === 2 ? {width: 20} : {flex: 1};
        var rightStyle = {flex: 1};

        var whiteHeight = this.state.index * 80;
            
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={this.props.hide}>
                    <Text>Tout fermer</Text>
                </TouchableHighlight>
                <ListView dataSource={dataSource} renderRow={(notification) => <Notification data={notification} close={this.closeNotification.bind(this)} />} enableEmptySections={true} />
                <View>
                    <View style={styles.topButtons}>
                        {this.renderButton(0)}
                        {this.renderButton(1)}
                        {this.renderButton(2)}
                    </View>
                    <View style={styles.content}>
                        <View style={{flexDirection: 'row', height: 100}}>
                        <View style={[leftStyle, {backgroundColor: 'firebrick'}]}/>
                        <View style={[middleStyle, {backgroundColor: 'seagreen'}]}/>
                        <View style={[rightStyle, {backgroundColor: 'steelblue'}]}/>
                        </View>
                        <View style={{height: whiteHeight, justifyContent: 'center', alignItems: 'center', overflow: 'hidden'}} removeClippedSubviews={true}>
                        <View>
                            <Text>Stuff Goes Here</Text>
                        </View>
                        </View>
                    </View>
                </View>
            </View>
        );
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