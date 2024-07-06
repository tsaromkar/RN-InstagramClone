import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Constants } from 'utils/Constants';
import { Home, Profile, Upload } from 'Modules';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './Root';
import HomeInactive from 'assets/icons/HomeInactive';
import HomeActive from 'assets/icons/HomeActive';
import UploadActive from 'assets/icons/UploadActive';
import UploadInactive from 'assets/icons/UploadInactive';
import ProfileActive from 'assets/icons/ProfileActive';
import ProfileInactive from 'assets/icons/ProfileInactive';

export type BottomTabsParamList = {
    Home: undefined
    Upload: undefined
    Profile: undefined
};

const Tab = createBottomTabNavigator<BottomTabsParamList>();

const BottomTabs: React.FC<NativeStackScreenProps<RootStackParamList, 'BottomTabs'>> = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: { height: 56 },
                tabBarShowLabel: false,
            }}>
            <Tab.Screen name={Constants.Home} component={Home} options={{
                tabBarIcon: ({ focused }) => (
                    focused ? <HomeActive /> : <HomeInactive />
                ),
            }} />
            <Tab.Screen name={Constants.Upload} component={Upload} options={{
                tabBarIcon: ({ focused }) => (
                    focused ? <UploadActive /> : <UploadInactive />
                )
            }} />
            <Tab.Screen name={Constants.Profile} component={Profile} options={{
                tabBarIcon: ({ focused }) => (
                    focused ? <ProfileActive /> : <ProfileInactive />
                )
            }} />
        </Tab.Navigator>
    );
}

export default BottomTabs;