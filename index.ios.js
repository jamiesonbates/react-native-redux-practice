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

// store.dispatch((dispatch) => {
//   dispatch({
//     type: 'FETCH_USERS_PENDING'
//   })
//
//   axios
//     .get('https://jsonplaceholder.typicode.com/users')
//     .then((res) => {
//       dispatch({
//         type: 'FETCH_USERS', payload: res.data
//       })
//     })
//     .catch((err) => {
//       dispatch({
//         type: 'FETCH_USERS_REJECTED', payload: err
//       })
//     })
// })

store.dispatch({
  type: 'FETCH_USERS',
  payload: axios.get('https://jsonplaceholder.typicode.com/users')
})

export default class ReduxPractice extends Component {
  constructor(props) {
    super(props);

    // this.state = store;
    // this.incrementValue = this.incrementValue.bind(this);
    // this.decrementValue = this.decrementValue.bind(this);
  }

  // incrementValue() {
  //   store.dispatch({
  //     type: 'INC',
  //     payload: {
  //       add: 1
  //     }
  //   })
  // }

  render() {
    return (
      <View style={styles.container}>
        {/* <Text>{this.state}</Text>
        <Button
          color="green"
          title="Increment"
          onPress={this.incrementValue}
        />
        <Button
          color="red"
          title="Decrement"
          onPress={this.decrementValue}
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8fd4f2',
  }
});

AppRegistry.registerComponent('ReduxPractice', () => ReduxPractice);
