import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IUserProfileDetails} from '../Profile.interface';

export default function UserDetails(props: IUserProfileDetails) {
  const {name = '', bio = ''} = props;

  return (
    <View style={styles.userDetails}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.bio}>{bio}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  userDetails: {
    marginTop: 12,
    marginHorizontal: 15,
  },
  name: {
    fontWeight: '500',
    fontSize: 14,
    color: '#222',
  },
  bio: {
    fontWeight: '400',
    color: '#222',
    fontSize: 15,
  },
});
