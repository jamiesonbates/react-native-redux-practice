import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import { connect }  from 'react-redux';
import { fetchUsers } from '../actions/usersActions';

export const User = (props) => {
  const { email } = props;
  return <Text>
    { email }
  </Text>
};
