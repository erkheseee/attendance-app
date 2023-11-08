import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import React from 'react'

const Widget = ({icon, text, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <Icon name={icon} style={styles.icon}></Icon>
        <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        margin: 15,
        height: 150,
        width: 150,
        borderRadius: 30,
        backgroundColor: "#822321",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
    },
    icon: {
        color: 'white',
        fontSize: 50,
    }
})

export default Widget