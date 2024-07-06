import { View, Text } from 'react-native'
import React from 'react'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { BottomTabsParamList } from 'Routes/BottomTabs'

const Home: React.FC<BottomTabScreenProps<BottomTabsParamList, 'Home'>> = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home

