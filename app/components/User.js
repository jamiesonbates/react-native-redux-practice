import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

export const User = (props) => {
  const { email } = props;
  return <Text>
    { email }
  </Text>
};
