import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Constants } from 'utils/Constants';
import BottomTabs, { BottomTabsParamList } from './BottomTabs';
import { NavigatorScreenParams } from '@react-navigation/native';
import { PostDetails } from 'Modules';

export type RootStackParamList = {
    BottomTabs: NavigatorScreenParams<BottomTabsParamList>;
    PostDetails: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Root = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={Constants.BottomTabs} component={BottomTabs} />
            <Stack.Screen name={Constants.PostDetails} component={PostDetails} />
        </Stack.Navigator >
    )
}

export default Root