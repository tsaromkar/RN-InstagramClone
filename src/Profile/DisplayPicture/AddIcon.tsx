import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

export default function AddIcon() {
  return (
    <View style={styles.iconContainer}>
      <Image style={styles.icon} source={require('../../../assets/plus.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    width: 24,
    height: 24,
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  icon: {
    width: 22,
    height: 22,
  },
});
