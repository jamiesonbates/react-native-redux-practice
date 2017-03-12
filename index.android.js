import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { applyMiddleware, createStore } from 'redux';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';

const initialState = {
  fetching: false, // show loader if true
  fetched: false,
  users: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USERS_START': {
      return {
        ...state,
        fetching: true
      }
      break;
    }
    case 'FETCH_USERS_ERROR': {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
      break;
    }
    case 'FETCH_USERS': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        users: action.payload
      }
      break;
    }
  }
};

const middleware = applyMiddleware(promise(), thunk, logger());
const store = createStore(reducer, middleware);

store.dispatch({
  type: 'FETCH_USERS',
  payload: axios.get('http://www.omdbapi.com/?s=Man')
});

export default class ReduxPractice extends Component {
  render() {
    return (
      <View>

      </View>
    );
  }
}

AppRegistry.registerComponent('ReduxPractice', () => ReduxPractice);
