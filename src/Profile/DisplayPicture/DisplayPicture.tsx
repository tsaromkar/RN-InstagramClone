import React from 'react';
import {Image, StyleSheet} from 'react-native';

import {IDisplayPicture} from '../Profile.interface';

export default function DisplayPicture(props: IDisplayPicture) {
  const {displayPicture = '', width = 80, height = 80} = props;

  return (
    <Image
      style={[styles.image, {width: width, height: height}]}
      source={{
        uri: displayPicture,
      }}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderColor: '#ededed',
  },
});
