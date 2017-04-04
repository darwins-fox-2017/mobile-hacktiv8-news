import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import AppNavigator from './src/AppNavigator'

export default class mobilenews extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

AppRegistry.registerComponent('mobilenews', () => mobilenews);
