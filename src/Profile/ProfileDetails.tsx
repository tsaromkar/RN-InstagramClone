import React from 'react';
import {StyleSheet, View} from 'react-native';

import DisplayPictureContainer from './DisplayPicture/DisplayPictureContainer';
import {IProfileDetails} from './Profile.interface';
import UserDetails from './UserDetails/UserDetails';
import UserStatsContainer from './UserDetails/UserStatsContainer';

export default function ProfileDetails(props: IProfileDetails) {
  const {
    displayPicture = '',
    fullName = '',
    bio = '',
    posts = 0,
    followers = 0,
    following = 0,
  } = props;

  return (
    <View>
      <View style={styles.displayImageContainer}>
        <DisplayPictureContainer displayPicture={displayPicture} />
        <UserStatsContainer
          posts={posts}
          followers={followers}
          following={following}
        />
      </View>
      <UserDetails name={fullName} bio={bio} />
    </View>
  );
}

const styles = StyleSheet.create({
  displayImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 20,
  },
});
