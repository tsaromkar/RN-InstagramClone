import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import {IPostComponent} from './Post.interface';
import UserDetailsContainer from './UserDetails/UserDetailsContainer';

export default function PostComponent(props: IPostComponent) {
  const {
    displayPicture = '',
    userName = '',
    location = '',
    post: item = '',
  } = props;

  return (
    <View>
      <UserDetailsContainer
        displayPicture={displayPicture}
        userName={userName}
        location={location}
      />
      <Image style={styles.images} source={{uri: item}} />
    </View>
  );
}

const styles = StyleSheet.create({
  images: {
    width: '100%',
    aspectRatio: 1,
    margin: 0,
  },
});
