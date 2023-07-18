import React from 'react'
import { View, Text, Image  } from 'react-native'

import styles from './footer.style'
import { icons } from "../../../constants"
import { TouchableOpacity } from 'react-native-gesture-handler'




const Footer = ({url}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity  style={styles.likeBtn}> 
        <Image
          source={icons.heartOutline}
          resizeMode="contain"
          style={styles.likeBtnImage}
          > 
        </Image>
      </TouchableOpacity>

      
      <TouchableOpacity
        style={ styles.applyBtn }
        onPress={() => Linking.openURL(url)}
      > 
        <Text style={styles.applyBtnText}>  Apply for job  </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer