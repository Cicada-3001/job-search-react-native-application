import React, { useState } from 'react'
import { useRouter } from 'expo-router'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator}
 from 'react-native'

import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants'
import PopularJobCard from "../../common/cards/popular/PopularJobCard"

const Popularjobs = () => {
  const router = useRouter()
  return (
    <View>
      <Text>Popularjobs</Text>
    </View>
  )
}

export default Popularjobs