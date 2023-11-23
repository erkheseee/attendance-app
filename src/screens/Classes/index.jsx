import { View, SafeAreaView, FlatList, Image, Text, ScrollView, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import CustomWidget from '../../components/CustomWidget'
import PP from '../../../assets/images/PP.jpg'
import classesData from './classesData'
import { getGradeProgress } from './getScores'
import Header from '../../components/Header/Header'

const Classes = ({route, navigation}) => {

  const classes = classesData();

  function viewClass(object) {
      navigation.navigate("Class", {angi: object, type: object.name});
  };

  return (
    <View style={{flex: 1}}>
      <ImageBackground source={require('../../../assets/images/classroom.jpg')} style={{flex:1}}>
        <View style={{flex: 1, backgroundColor: 'rgba(193, 192, 185, 0.75)'}}>
          <Header/>
          <View style={styles.widgets}>
          <ScrollView style={styles.classes}>
            {classes.map((angi, index) => {
              return (
                <CustomWidget key={angi.id} onPress={() => viewClass(angi)} itemStyles={[styles.class, index % 2 && { backgroundColor: '#822321' }]} >
                  <View style={styles.container}>
                    <View style={{flex: 1, marginLeft: 20,}}><Image source={angi.teacherImage ? angi.teacherImage : PP} style={styles.image} resizeMode="contain"></Image></View>
                    <View style={styles.textContainer}>
                      <Text style={[styles.textStyles, index % 2 && { color: '#fff' }]}>{angi.name}</Text>
                      <Text style={[styles.text, index % 2 && { color: '#fff' }]}>{angi.teacher}</Text>
                      <View style={{flex: 1}}><Text style={[styles.gradeText, index % 2 && { color: '#fff' }]}>{parseInt(getGradeProgress(angi).gradeProgress)}/100</Text></View>
                    </View>
                  </View>
                </CustomWidget>
              );
            })}
          </ScrollView>
          </View>
          
        </View>
      </ImageBackground>
    </View>
      
  );
}

const styles = StyleSheet.create({
  widgets: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  classes: {
    position: 'absolute',
    top: '9%',
    marginHorizontal: '5%',
    height: '80%',
    width: '90%',
  },
  class: {
    borderRadius: 30,
    height: 150,
    marginHorizontal: 16,
    marginVertical: 6,
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#D9BDBC',
    borderWidth: 2,
    borderColor: 'black',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 10, height: 5},
    shadowRadius: 3.5,
    elevation: 5,
  },
  textContainer: {
    flex: 3,
    marginHorizontal: 10,
    // backgroundColor: 'yellow',
  },
  text: {
    textAlignVertical: 'center',
    color: 'black',
    fontStyle: 'italic',
    fontSize: 15,
  },
  gradeText: {
    textAlignVertical: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 13,
  },
  textStyles: {
    fontSize: 18,
    fontWeight: '900',
    color: 'black',
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 100,
  },
})

export default Classes