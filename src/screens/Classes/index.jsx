import { View, Image, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomWidget from '../../components/CustomWidget'
import PP from '../../../assets/images/PP.jpg'
import classesData from './classesData'
import { getGradeProgress } from './getScores'
import UserHeader from '../../components/Header/Header'

const Classes = ({route, navigation}) => {

  let classes = classesData();

  function viewClass(object) {
      navigation.navigate("Class", {angi: object, type: object.name});
  }

  return (
      <ScrollView style={styles.classes}>
        {classes.map((angi) => {
          return (
            <CustomWidget key={angi.id} onPress={() => viewClass(angi)} itemStyles={styles.class}>
              <View style={styles.container}>
                <View style={{flex: 1, marginLeft: 15,}}><Image source={angi.teacherImage ? angi.teacherImage : PP} style={styles.image} resizeMode="contain"></Image></View>
                <View style={styles.textContainer}>
                  <Text style={styles.textStyles}>{angi.name}</Text>
                  <Text></Text>
                  <Text style={styles.text}>{angi.teacher}</Text>
                </View>
                <View style={{flex: 1}}><Text style={styles.gradeText}>{parseInt(getGradeProgress(angi).gradeProgress)}/100</Text></View>
              </View>
            </CustomWidget>
          );
        })}
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  classes: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.4)',
    padding: 5,
    backgroundColor: '#822321',
    marginTop: 60,
  },
  class: {
    flex: 1,
    borderRadius: 20,
    height: 90,
    marginHorizontal: 16,
    marginVertical: 6,
    justifyContent: 'center',
    flexDirection: 'column'
  },
  textContainer: {
    flex: 4,
    marginLeft: 10,
  },
  text: {
    textAlignVertical: 'center',
    color: 'white',
    fontStyle: 'italic',
    fontSize: 15,
  },
  gradeText: {
    textAlignVertical: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13,
  },
  textStyles: {
    fontSize: 20,
    color: 'white'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
})

export default Classes