import {Text, View, 
    SafeAreaView, ScrollView, ActivityIndicator, 
    RefreshControl
} from 'react-native'
import { useState } from 'react'

import { Stack, useRouter, useSearchParams } from 'expo-router'
import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, 
Specifics} from '../../components'
import { COLORS, icons, SIZES } from '../../constants'
import useFetch from '../../hook/useFetch'


const tabs = ["About", "Qualifications", "Responsibilities"];




const JobDetails = () => {
  const params = useSearchParams()
  const router = useRouter()

  const { data, isLoading, error, refetch } = useFetch('job-details', {
    job_id: params.id
  })

  const { refreshing, setRefreshing } = useState(false)
  const [activeTab, setActiveTab] = useState(tabs[0])
   
  const onRefresh = () => {

  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite}}> 
        <Stack.Screen
            options={{
                headerStyle: { backgroundColor: COLORS.lightWhite},
                headerShadowVisible: false, 
                headerBackVisible: false, 
                headerLeft: () => (
                    <ScreenHeaderBtn
                        iconUrl={icons.left}
                        dimension="60%"
                        handlePress={()=>router.back()}
                    />
                ), 
                headerRight: () => (
                  <ScreenHeaderBtn
                      iconUrl={icons.share}
                      dimension="60%"
                      handlePress={()=>router.back()}
                  />
              ),
                headerTitle: " "
                
            }}

       />

      <ScrollView  showsVerticalScrollIndicator={false} RefreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
        { 
          isLoading ? (
            <ActivityIndicator size="large" color={COLORS.primary}
             />
          ): error ? (
            <Text>Something went wrong</Text>
          ): data.length == 0 ? (
            <Text>No data</Text>
          ): (
            <View
              style={{ padding: SIZES.medium, paddingBottom: 100}}
              > 
              <Company
                companyLogo={data[0].employer_logo}
                jobTitle={data[0].job_title}
                companyName={data[0].employer_name}
                location={data[0].job_country}
              />

              <JobTabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />


            </View>
          )
        }

      </ScrollView>
      


    </SafeAreaView>
  )
}

export default JobDetails