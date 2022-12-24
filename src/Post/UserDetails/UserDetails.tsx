import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {IUserPostDetails} from '../Post.interface';

export default function UserDetails(props: IUserPostDetails) {
  const {userName = '', location = ''} = props;

  return (
    <View style={styles.userDetails}>
      <Text style={styles.userName}>{userName}</Text>
      <Text style={styles.location}>{location}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  userDetails: {
    marginHorizontal: 15,
  },
  userName: {
    fontWeight: '500',
    fontSize: 14,
    color: '#222',
    padding: 0,
  },
  location: {
    fontWeight: '400',
    color: '#222',
    fontSize: 12,
    padding: 0,
  },
});
