import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feed from '../Feed/Feed';
import Profile from '../Profile/Profile';

const BottomTab = createBottomTabNavigator();

const Home = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarStyle: {height: 56},
      }}>
      <BottomTab.Screen name="Feed" component={Feed} />
      <BottomTab.Screen name="Profile" component={Profile} />
    </BottomTab.Navigator>
  );
};

export default Home;
