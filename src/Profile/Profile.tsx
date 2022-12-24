import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';

import Button from '../Components/Button';
import {ProfileData} from '../mock/ProfileData';
import ProfileDetails from './ProfileDetails';
import UserImages from './UserImages';

const Profile = () => {
  const {
    displayPicture,
    fullName,
    bio,
    posts,
    followers,
    following,
    userImages,
    userName,
    location,
  } = ProfileData;
  const navigation = useNavigation();

  const handleNavigateToPost = useCallback(
    (item: string) => {
      navigation.navigate(
        'Post' as never,
        {
          post: {
            displayPicture,
            userName,
            location,
            post: item,
          },
        } as never,
      );
    },
    [displayPicture, location, navigation, userName],
  );

  return (
    <View style={styles.container}>
      <ProfileDetails
        displayPicture={displayPicture}
        fullName={fullName}
        bio={bio}
        posts={posts}
        followers={followers}
        following={following}
      />
      <Button
        label="Edit Profile"
        onButtonPress={() => console.log('Edit Profile')}
      />
      <View style={styles.divider} />
      <UserImages images={userImages} navigateTo={handleNavigateToPost} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#ededed',
    borderRadius: 6,
    marginTop: 25,
    marginHorizontal: 12,
    paddingVertical: 6,
    alignItems: 'center',
  },
  buttonLabel: {
    fontWeight: '500',
    fontSize: 14,
    color: '#222',
  },
  divider: {
    borderTopWidth: 0.8,
    borderColor: '#ededed',
    marginTop: 20,
  },
});

export default Profile;
