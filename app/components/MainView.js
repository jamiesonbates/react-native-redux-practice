import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import { connect }  from 'react-redux';
import { fetchUsers } from '../actions/usersActions';

const getStoreValuesAsProps = function(store) {
  // whatever returned becomes prop in MainView
  return {
    users: store.users
  };
};

class MainView extends Component {
  componentWillMount() {
    this.props.dispatch(fetchUsers());
  }
  render() {
    return <View>
      <Text>
        Hi
      </Text>
    </View>
  }
}

export default connect(getStoreValuesAsProps)(MainView);
