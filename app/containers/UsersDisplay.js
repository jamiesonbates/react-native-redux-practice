import React, { Component } from 'react';
import { connect }  from 'react-redux';
import { fetchUsers } from '../actions/usersActions';
import 

export default class UsersDisplay extends Component {
  componentWillMount() {
    this.props.dispatch(fetchUsers());
  }

  render() {
    const { propName } = this.props;

    if (!propName.users.length) {
      return <Text>Sorry, something went wrong...</Text>
    }

    return <View>

    </View>
  }
}
