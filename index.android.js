import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  View
} from 'react-native';
import Routes from './common/routes';
import NotificationList from './common/components/notification/notificationList';

class FilmManager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showNotificationList: false,
      notifications: []
    };
  }

  renderScene(route, navigator) {
    return React.createElement(route.component, {...route.props, navigator: navigator, notificationList: {
      notifications: this.state.notifications,
      show: this.showNotificationList.bind(this)
    }});
  }

  showNotificationList() {
    this.setState({showNotificationList: true});
  }
  hideNotificationList() {
    this.setState({showNotificationList: false});
  }

	render() {
    return (
      <View style={{flex:1}}>
        <Navigator initialRoute={Routes.Home} renderScene={this.renderScene.bind(this)} />
        {this.state.showNotificationList ? <NotificationList datasource={this.state.notifications} hide={this.hideNotificationList.bind(this)}/> : null}
      </View>
    );
  }
}

AppRegistry.registerComponent('FilmManager', () => FilmManager);
