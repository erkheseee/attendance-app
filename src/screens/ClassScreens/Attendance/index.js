import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import AttendanceCheck from '../../../components/AttendanceCheck'

const Attendance = () => {
    let attendance = [];
    for(let i = 0; i<15; i++){
        attendance[i] = Math.random() < 0.5 ? true : false;
    }
    console.log(attendance);

    return (
    <ScrollView style={styles.classes}>
        {attendance.map((value) => ( <AttendanceCheck status={value} />))}
    </ScrollView>
    )
}

const styles = StyleSheet.create({
  classes: {
    backgroundColor: '#ffdead',
    height: '100%',
    paddingTop: 60,
    padding: 5,
  },
})

export default Attendance