import React from 'react';
import {StyleSheet, View} from 'react-native';

import {IDisplayPictureContainer} from '../Profile.interface';
import AddIcon from './AddIcon';
import DisplayPicture from './DisplayPicture';

const IMAGE_SIZE = 80;

export default function DisplayPictureContainer(
  props: IDisplayPictureContainer,
) {
  const {displayPicture = ''} = props;

  return (
    <View style={styles.container}>
      <DisplayPicture
        displayPicture={displayPicture}
        width={IMAGE_SIZE}
        height={IMAGE_SIZE}
      />
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
