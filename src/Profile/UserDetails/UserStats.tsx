import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {IUserStats} from '../Profile.interface';

export default function UserStats(props: IUserStats) {
  const {count = 0, type = ''} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.count}>{count}</Text>
      <Text style={styles.text}>{type}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  count: {
    fontWeight: '700',
    color: '#222',
    fontSize: 16,
  },
  text: {
    color: '#222',
  },
});
