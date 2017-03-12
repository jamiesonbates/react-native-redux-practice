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
import MainView from './app/components/MainView';

export default class ReduxPractice extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainView />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('ReduxPractice', () => ReduxPractice);
