import React, {useMemo} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {View} from 'react-native';
import Button from '../Components/Button';
import Layout from '../Components/Layout';
import ProfileDetails from './ProfileDetails';
import UserImages from './UserImages';

const DEMO_IMAGES = [
  'https://images.unsplash.com/photo-1661347334008-da5448d2a6cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1668437843313-f65ffbc735ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1668342433263-d9669a2e3b85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1668571350460-3b7bf36b87e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1668369216554-5a91e506d1cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1661347334008-da5448d2a6cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1668437843313-f65ffbc735ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1668342433263-d9669a2e3b85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1668571350460-3b7bf36b87e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1668369216554-5a91e506d1cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
];

const Profile = () => {
  return (
    <View style={styles.container}>
      <ProfileDetails />
      <Button
        label="Edit Profile"
        onButtonPress={() => console.log('Edit Profile')}
      />
      <View style={styles.divider} />
      <UserImages images={DEMO_IMAGES} />
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
