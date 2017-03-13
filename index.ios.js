import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import store from './app/store';

import axios from 'axios';
import  DisplayUsers from './app/containers/DisplayUsers';

export default class ReduxPractice extends Component {
  render() {
    return (
      <Provider store={store}>
        <DisplayUsers />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('ReduxPractice', () => ReduxPractice);
