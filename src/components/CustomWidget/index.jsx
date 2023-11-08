import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import {LinearGradient} from 'expo-linear-gradient'

const CustomWidget = ({ textStyles, itemStyles, text, children, onPress}) => {
  return (
    <LinearGradient colors={['#822321', '#b47b79']} locations={[0.3, 1]} start={{x: 0, y: 0}} end={{x: 1, y: 1}} style={itemStyles}>
      <TouchableOpacity onPress={onPress}>
          <View>
            <Text style={textStyles}>{text}</Text>
            {children}
          </View>
      </TouchableOpacity>
    </LinearGradient>
  )
}

export default CustomWidget