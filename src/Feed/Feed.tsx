import React, {useCallback} from 'react';
import {FlatList, Pressable, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {FEED_DATA} from '../mock/FeedData';
import PostComponent from '../Post/PostComponent';
import {IFeedPost} from './Feed.interface';

const Feed = () => {
  const navigation = useNavigation();

  const handleNavigateToPost = useCallback(
    (post: IFeedPost) => {
      navigation.navigate(
        'Post' as never,
        {
          post: post,
        } as never,
      );
    },
    [navigation],
  );

  return (
    <FlatList
      style={styles.flatList}
      data={FEED_DATA}
      keyExtractor={(item, index) => item.post + index}
      renderItem={({item, index}) => {
        return (
          <Pressable
            style={index !== 0 && styles.postItem}
            onPress={() => handleNavigateToPost(item)}>
            <PostComponent {...item} />
          </Pressable>
        );
      }}
    />
  );
};

export default Feed;

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
    backgroundColor: '#fff',
  },
  postItem: {
    marginTop: 10,
  },
});
