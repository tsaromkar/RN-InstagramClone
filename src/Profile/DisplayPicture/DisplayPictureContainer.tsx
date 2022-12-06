import React from 'react';
import {StyleSheet, View} from 'react-native';
import AddIcon from './AddIcon';
import DisplayPicture from './DisplayPicture';

const IMAGE_SIZE = 80;

export default function DisplayPictureContainer() {
  return (
    <View style={styles.container}>
      <DisplayPicture width={IMAGE_SIZE} height={IMAGE_SIZE} />
      <AddIcon />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
