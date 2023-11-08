import { View, Text, ImageBackground, StyleSheet, TouchableOpacity  } from 'react-native'
import React from 'react'
import Building from '../../../../assets/images/building.jpeg'
import CustomWidget from '../../../components/CustomWidget'
import UserHeader from '../../../components/UserHeader/UserHeader'

const Class = ({route, navigation}) => {
  const {angi} = route.params;

  let gradeProgress = 0;
  Object.keys(angi.gradeProgress).forEach((key)=>{
    gradeProgress += angi.gradeProgress[key];
  })

  const onPress = () => navigation.navigate('Grades', {angi: angi});

  return (
    <ImageBackground source={Building} style={{flex: 1}}>
      <View style={styles.container}>
        <UserHeader userJob='Багш' userName={angi.teacher} userMajor='Програм Хангамж'/>
        <View style={{flex: 6, justifyContent: 'space-between'}}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Хичээлийн тайлбар: </Text>
            <Text style={styles.text}>{angi.summary}</Text>
          </View>
          <TouchableOpacity style={{flex: 1.5,}}>
            <View style={styles.class}><Text style={styles.textStyles}>Хичээлийн материалууд</Text></View>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1.5,}} onPress={onPress}>
            <View style={styles.class}><Text style={styles.textStyles}>{'Дүн: '+gradeProgress+'/100'}</Text></View>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.4)',
  },
  textContainer: {
    flex: 6,
    justifyContent: 'space-evenly',
    padding: 20,
    backgroundColor: 'rgba(255,255,255,0.4)',
    borderRadius: 30,
    margin: 30,
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    borderRadius: 20,
  },
  class: {
    flex:1,
    height: 30,
    borderRadius: 30,
    justifyContent: 'center',
    margin: 10,
    marginBottom: 15,
    backgroundColor: '#822321',
  },
  textStyles: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
})

export default Class