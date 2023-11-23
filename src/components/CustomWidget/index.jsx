import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import {LinearGradient} from 'expo-linear-gradient'

const CustomWidget = ({ itemStyles, children, onPress}) => {
  return (
    <View style={itemStyles}>
      <TouchableOpacity onPress={onPress} >
            {children}
      </TouchableOpacity>
    </View>
  )
}

export default CustomWidget