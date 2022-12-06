import React from 'react';
import {StyleSheet, View} from 'react-native';
import DisplayPicture from '../../Profile/DisplayPicture/DisplayPicture';
import UserDetails from './UserDetails';

const IMAGE_SIZE = 36;

export default function UserDetailsContainer() {
  return (
    <View style={styles.userDetailsContainer}>
      <DisplayPicture width={IMAGE_SIZE} height={IMAGE_SIZE} />
      <UserDetails username="chaleegreen357" location="NewYork" />
    </View>
  );
}

const styles = StyleSheet.create({
  userDetailsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});
