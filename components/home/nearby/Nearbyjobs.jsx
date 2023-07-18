import React, { useState } from 'react'
import { useRouter } from 'expo-router'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator}
 from 'react-native'

import styles from './nearbyjobs.style'
import { COLORS, SIZES } from '../../../constants'
import PopularJobCard from "../../common/cards/popular/PopularJobCard"
import useFetch from '../../../hook/useFetch'
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'



const Nearbyjobs = () => {
  const router = useRouter()
  const { data, isLoading, error } = useFetch("search", {
      query: "React developer",
      num_pages: "1"
  });


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show  All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}> 
        { isLoading ? (
        <ActivityIndicator size="large" colors={COLORS.primary}/>
        ): error ?  (
          <Text>{error.message}</Text>
        ) : (
      
            data.map((job)=>{
             return <NearbyJobCard
                    job={job}
                    key={`nearby-job-${job?.job_id}`}
                    handleNavigate={()=> router.push(`/job-details/${job.job_id}`)}
                />
            }  
            )
          
        ) }


      </View>

    </View>
  )
}

export default Nearbyjobs