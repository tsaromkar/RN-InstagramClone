import React from 'react';
import {StyleSheet, View} from 'react-native';

import DisplayPicture from '../../Profile/DisplayPicture/DisplayPicture';
import {IUserDetailsContainer} from '../Post.interface';
import UserDetails from './UserDetails';

const IMAGE_SIZE = 36;

export default function UserDetailsContainer(props: IUserDetailsContainer) {
  const {displayPicture = '', userName = '', location = ''} = props;

  return (
    <View style={styles.userDetailsContainer}>
      <DisplayPicture
        displayPicture={displayPicture}
        width={IMAGE_SIZE}
        height={IMAGE_SIZE}
      />
      <UserDetails userName={userName} location={location} />
    </View>
  );
}

const styles = StyleSheet.create({
  userDetailsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 10,
  },
});
