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
        margin: 20,
        height: 150,
        width: 150,
        borderRadius: 30,
        backgroundColor: "#822321",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth: 3,
        // borderColor: 'white',
    },
    text: {
        fontWeight: '900',
        color: 'white',
        paddingTop: 10,
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 0,
        shadowOffset: {height: 2, width: 2},
    },
    icon: {
        color: 'white',
        fontSize: 50,
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 0,
        shadowOffset: {height: 2, width: 2},
    }
})

export default Widget