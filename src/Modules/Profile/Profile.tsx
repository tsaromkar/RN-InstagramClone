import { View, Text } from 'react-native'
import React from 'react'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { BottomTabsParamList } from 'Routes/BottomTabs'

const Profile: React.FC<BottomTabScreenProps<BottomTabsParamList, 'Profile'>> = () => {
    return (
        <View>
            <Text>Profile</Text>
        </View>
    )
}

export default Profile