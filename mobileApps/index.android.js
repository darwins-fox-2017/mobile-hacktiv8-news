/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import App from './src/App'

export default class mobileApps extends Component {
  render() {
    return (
      <App />
    );
  }
}


AppRegistry.registerComponent('mobileApps', () => mobileApps);
