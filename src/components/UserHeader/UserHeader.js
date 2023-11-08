import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import PP from '../../../assets/images/PP.jpg'

const UserHeader = ({userJob, userName, userMajor, userImage}) => {
  return (
    <View style={styles.profilecontainer}>
        <View style={styles.profile}>
          <View style={styles.textContainer}>
            <Text style={styles.greet}>{userJob}: {userName}</Text>
            <Text style={styles.major}>{userMajor}</Text>
          </View>
          <Image source={userImage ? userImage : PP} style={styles.image} resizeMode="contain"></Image>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
    textContainer: {

    },

    greet: {
      fontSize: 24,
      fontWeight: "bold",
      color: 'white',
    },

    major: {
        fontSize: 16,
        color: 'lightgrey',
        fontStyle: 'italic',
    },
  
    profile: {
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 30,
    },
  
    profilecontainer: {
      flex: 1,
      backgroundColor: '#822321',
      height: '15%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomLeftRadius: 25,
      borderBottomRightRadius: 25,
    },

    
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
})

export default UserHeader