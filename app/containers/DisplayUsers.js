import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect }  from 'react-redux';
import { fetchUsers } from '../actions/usersActions';
import { User } from '../components/User';

const mapStateToProps = function(store) {
  return {
    propName: store.usersDetails
  };
};

class DisplayUsers extends Component {
  componentWillMount() {
    this.props.dispatch(fetchUsers());
  }

  render() {
    const { propName } = this.props;
    console.log(propName.users);

    if (!propName.users.length) {
      return <Text>Something went wrong...</Text>
    }

    return <View>
      {
        propName.users.map(e => {
          return <User key={e.id} user={e}/>
        })
      }
    </View>
  }
}

export default connect(mapStateToProps)(DisplayUsers);
