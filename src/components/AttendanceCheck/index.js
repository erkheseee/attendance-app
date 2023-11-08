import { View, Text, StyleSheet, Pressable} from 'react-native'
import {CheckBox} from 'react-native-paper'
import React from 'react'
import UserHeader from '../UserHeader/UserHeader'

const AttendanceCheck = ({status}) => {
  return (
    <View style={styles.grade}>
      <CheckBox value={status}></CheckBox>
    </View>
  )
}

const styles = StyleSheet.create({
    grade: {
        flex: 1,
        borderRadius: 30,
        height: 50,
        borderWidth: 2,
        borderColor: 'black',
        margin: 5,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default AttendanceCheck