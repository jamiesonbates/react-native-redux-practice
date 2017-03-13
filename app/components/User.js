import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import { connect }  from 'react-redux';
import { fetchUsers } from '../actions/usersActions';

export const User = (props) => {
  return <Text>
    {props.user.email}
  </Text>
};
