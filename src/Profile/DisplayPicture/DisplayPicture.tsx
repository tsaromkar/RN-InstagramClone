import React from 'react';
import {Image, StyleSheet} from 'react-native';

interface IDisplayPicture {
  width: number;
  height: number;
}

export default function DisplayPicture(props: IDisplayPicture) {
  const {width = 80, height = 80} = props;
  return (
    <Image
      style={[styles.image, {width: width, height: height}]}
      source={{
        uri: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
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
