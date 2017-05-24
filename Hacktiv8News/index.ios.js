/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import App from './src/App.js'

export default class Hacktiv8News extends Component {
  render() {
    return (
      <App />
    )
  }
}

AppRegistry.registerComponent('Hacktiv8News', () => Hacktiv8News);
