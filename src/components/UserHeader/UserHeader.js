import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import PP from '../../../assets/images/PP.jpg'

const UserHeader = ({user}) => {
  return (
    <View style={styles.profilecontainer}>
        <View style={styles.profile}>
          <View style={styles.textContainer}>
            <Text style={styles.greet}>Юу байна {user.userName}?</Text>
            <Text style={styles.major}>{user.userMajor}</Text>
          </View>
          <Image source={user.userImage ? user.userImage : PP} style={styles.image} resizeMode="contain"></Image>
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
        color: 'black',
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
      flex: 2,
      backgroundColor: '#822321',
      height: '15%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },

    
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
})

export default UserHeader