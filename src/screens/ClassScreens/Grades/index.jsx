import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import CustomWidget from '../../../components/CustomWidget'

const Grades = ({route, navigation}) => {
  const {angi} = route.params;

  const selectTitle = (key) => {
    switch(key){
      case "att": return "Ирц";
      case "lab": return "Лаборатори";
      case "ass": return "Бие Даалт";
      case "exam": return "Шалгалт";
    }
  };

  let gradeProgress = 0;
  let results = [];
  Object.keys(angi['grades']).forEach((key)=>{
    gradeProgress += parseInt(angi.gradeProgress[key]);
    results.push(
      <CustomWidget textStyles={styles.textStyles} key={key} text={selectTitle(key)} itemStyles={styles.grade}>
        <Text style={styles.textStyles}>{angi.gradeProgress[key]}/{angi.grades[key]}</Text>
      </CustomWidget>
    )
  });

  return (
    <ScrollView style={{flex:1}}>
      {results}
      <CustomWidget text='Нийт Дүн' textStyles={styles.textStyles} key={'gradeProgress'}  itemStyles={styles.totalGrade}>
        <Text style={styles.textStyles}>{gradeProgress+'/100'}</Text>
      </CustomWidget>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  totalGrade: {
    marginTop: 50,
    backgroundColor: 'grey',
    borderWidth: 1,
    borderRadius: 30,
    alignItems: 'center',
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: '#822321',
  },
  grade: {
    backgroundColor: 'grey',
    borderWidth: 1,
    borderRadius: 30,
    alignItems: 'center',
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: '#822321',
  },
  textStyles: {
    color: 'lightgrey',
    fontSize: 25,
    textAlign: 'center',
  }
})

export default Grades