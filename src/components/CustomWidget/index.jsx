import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import {LinearGradient} from 'expo-linear-gradient'

const CustomWidget = ({ textStyles, itemStyles, text, children, onPress, cell}) => {
  let gradientColor = (cell) ? ['', ''] : ['#b47b79', '#822321']
  return (
    <LinearGradient colors={gradientColor} locations={[0.5, 0.96]} start={{x: 0, y: 0.5}} end={{x: 1, y: 0.5}} style={itemStyles}>
      <TouchableOpacity onPress={onPress} >
            {children}
      </TouchableOpacity>
    </LinearGradient>
  )
}

export default CustomWidget