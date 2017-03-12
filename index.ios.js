import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';
// import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';
import MainView from './app/components/MainView';

const initialState = {
  fetching: false, // loading screen if true
  fetched: false,
  movies: [],
  error: null,
};

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case 'FETCH_USERS_PENDING': {
      return {
        ...state,
        fetching: true
      }
      break;
    }
    case 'FETCH_USERS_REJECTED': {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
      break;
    }
    case 'FETCH_USERS_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        movies: action.payload.data
      }
      break;
    }
  }
};

const middleware = applyMiddleware(promise(), thunk, logger());
const store = createStore(reducer, middleware);

store.dispatch({
  type: 'FETCH_USERS',
  payload: axios.get('https://jsonplaceholder.typicode.com/users')
})

export default class ReduxPractice extends Component {
  render() {
    return (
      <MainView />
    );
  }
}

AppRegistry.registerComponent('ReduxPractice', () => ReduxPractice);
