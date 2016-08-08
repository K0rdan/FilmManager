import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  View
} from 'react-native';
import Routes from './common/routes';
import Notification from './common/components/notification';

class FilmManager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showNotification: false
    };
  }

  renderScene(route, navigator) {
    return React.createElement(route.component, {...route.props, navigator: navigator, notification: {
      show: this.showNotification.bind(this)
    }});
  }

  showNotification() {
    this.setState({showNotification: true});
  }

	render() {
    return (
      <View style={{flex:1}}>
        <Navigator initialRoute={Routes.Home} renderScene={this.renderScene.bind(this)} />
        {this.state.showNotification ? <Notification /> : null}
      </View>
    );
  }
}

AppRegistry.registerComponent('FilmManager', () => FilmManager);
