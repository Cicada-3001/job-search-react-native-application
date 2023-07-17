import { useState } from 'react'
import { View, ScrollView, SafeAreaView, Text } from 'react-native'
import { Stack, useRouter } from  'expo-router'
import { COLORS, icons, images, SIZES } from '../constants'
import { Nearbyjobs, Popularjobs, ScreenHeader, Welcome } from '../components'



const Home = () => {
    const router = useRouter()


     
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}> 
            <Text>Home</Text>
        </SafeAreaView> 
    )
}

export default Home 