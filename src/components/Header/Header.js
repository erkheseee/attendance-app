import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'

const Header = ({title}) => {
  return (
        <View style={styles.profilecontainer}>
          <Text style={styles.greet}>{title}</Text>    
        </View>
  )
}

const styles = StyleSheet.create({
    greet: {
      fontSize: 24,
      fontWeight: "bold",
      color: 'white',
      top: '25%',
      shadowColor: 'black',
      shadowOpacity: 1,
      shadowRadius: 0,
      shadowOffset: {height: 2, width: 2},
    },
  
    profilecontainer: {
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      height: '20%',
      backgroundColor: '#822321',
      borderBottomLeftRadius: 25,
      borderBottomRightRadius: 25,
      paddingHorizontal: 40,
      borderColor: 'black',
      borderBottomWidth: 3,
      borderLeftWidth: 1,
      borderRightWidth: 1,
    },
})

export default Header