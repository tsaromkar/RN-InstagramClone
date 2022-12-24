import React from 'react';
import {FlatList, Image, Pressable, StyleSheet} from 'react-native';

import {IUserImages} from './Profile.interface';

const IMAGE_MARGIN = 0.7;

export default function UserImages(props: IUserImages) {
  const {images, navigateTo} = props;

  return (
    <FlatList
      style={styles.flatList}
      data={images}
      numColumns={3}
      keyExtractor={(item, index) => item + index}
      renderItem={({item, index}) => {
        const leftMargin = index % 3 === 0 ? 0 : IMAGE_MARGIN;
        const rightMargin = (index + 1) % 3 === 0 ? 0 : IMAGE_MARGIN;
        return (
          <Pressable
            style={styles.imageContainer}
            onPress={() => navigateTo(item)}>
            <Image
              style={[
                styles.images,
                {marginLeft: leftMargin, marginRight: rightMargin},
              ]}
              resizeMode="cover"
              source={{uri: item}}
            />
          </Pressable>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
  },
  imageContainer: {
    flex: 1 / 3, //here you can use flex:1 also
    aspectRatio: 1,
  },
  images: {
    flex: 1,
    margin: 0.7,
  },
});
