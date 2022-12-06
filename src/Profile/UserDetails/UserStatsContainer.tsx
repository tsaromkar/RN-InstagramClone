import React from 'react';
import {StyleSheet, View} from 'react-native';
import UserStats from './UserStats';

export default function UserStatsContainer() {
  return (
    <View style={styles.userStats}>
      <UserStats count={6} type="Posts" />
      <UserStats count={0} type="Followers" />
      <UserStats count={7} type="Following" />
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
