import { View, Text } from 'react-native'
import React from 'react'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { BottomTabsParamList } from 'Routes/BottomTabs'

const Upload: React.FC<BottomTabScreenProps<BottomTabsParamList, 'Upload'>> = () => {
    return (
        <View>
            <Text>Upload</Text>
        </View>
    )
}

export default Upload