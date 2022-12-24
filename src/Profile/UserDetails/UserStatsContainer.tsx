import React from 'react';
import {StyleSheet, View} from 'react-native';

import {IUserStatsContainer} from '../Profile.interface';
import UserStats from './UserStats';

export default function UserStatsContainer(props: IUserStatsContainer) {
  const {posts = 0, followers = 0, following = 0} = props;

  return (
    <View style={styles.userStats}>
      <UserStats count={posts} type="Posts" />
      <UserStats count={followers} type="Followers" />
      <UserStats count={following} type="Following" />
    </View>
  );
}

const styles = StyleSheet.create({
  userStats: {
    flexDirection: 'row',
    flex: 0.85,
    justifyContent: 'space-between',
  },
});
