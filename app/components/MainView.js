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
    propName: store.usersDetails
  };
};

class MainView extends Component {
  componentWillMount() {
    this.props.dispatch(fetchUsers());
  }
  render() {
    const { propName } = this.props;

    if (!propName.users.length) {
      return <Text>NOTHING</Text>
    }

    return <View>
      {
        propName.users.map(e => <Text key={e.id}>{e.email}</Text>)
      }
    </View>
  }
}

export default connect(getStoreValuesAsProps)(MainView);
