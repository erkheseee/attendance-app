import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import PP from '../../../assets/images/PP.jpg'

const UserCard = ({name, id, major, picture}) => {
  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <View>
            <Text style={{fontSize: 25, fontWeight: "900",}}>{name ? name : 'Нэр'}</Text>
            <Text style={{fontWeight: '300', }}>{id ? id : 'ID'}</Text>
            <Text style={{fontSize: 15, marginTop: 10, fontWeight: "800", fontStyle: 'italic'}}>{major ? major : 'Мэргэжил'}</Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image src={picture ? picture : null} source={PP} style={styles.image} resizeMode="contain"></Image>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#D9BDBC',
        width: '90%',
        height: '20%',
        marginHorizontal: '5%',
        borderRadius: 30,
        borderWidth: 2,
        borderColor: 'black',
        position: 'absolute',
        top: 85,
        flexDirection: 'row',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 10, height: 10},
        shadowRadius: 3.5,
        elevation: 5,
    },
    textContainer: {flex: 5, alignItems: 'center', justifyContent: 'center' },
    imageContainer: {flex: 3, alignItems: 'center', justifyContent: 'center', },
    image: {
        width: 100,
        height: 100,
        borderRadius: 30,
        borderWidth: 1.4,
        borderColor: 'black',
    },
})

export default UserCard