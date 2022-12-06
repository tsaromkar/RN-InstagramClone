import React from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';
import DisplayPictureContainer from './DisplayPicture/DisplayPictureContainer';
import UserDetails from './UserDetails/UserDetails';
import UserStatsContainer from './UserDetails/UserStatsContainer';

export default function ProfileDetails() {
  return (
    <View>
      <View style={styles.displayImageContainer}>
        <DisplayPictureContainer />
        <UserStatsContainer />
      </View>
      <UserDetails name="Chalee Green" bio="Coffee and Cats" />
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
