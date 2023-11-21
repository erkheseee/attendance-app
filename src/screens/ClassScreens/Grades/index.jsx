import { View, Text, ScrollView, ScrollViewStickyHeader, StyleSheet, FlatList } from 'react-native'
import {React, useState} from 'react'
import CustomWidget from '../../../components/CustomWidget'
import { Table, Col, Row } from 'react-native-table-component';
import { getGradeProgress } from '../../Classes/getScores'

const Grades = ({route, navigation}) => {

  const {angi} = route.params;

  const {object, gradeProgress} = getGradeProgress(angi);

  let tableHead = [];
  let widthArr = [];
  for(let i=1; i<6; i++){
    widthArr.push(100);
  }

  let leftHead = [''];
  heightArr = [40];
  for(let i=1; i<17; i++){
    leftHead.push(i);
    heightArr.push(30);
  }
  leftHead.push('');
  heightArr.push(40);

  Object.keys(angi.grades).forEach((dun) => tableHead.push(dun))

  const tableData = []
  for(let i=1; i<17; i++){
    const rowData = []
    Object.values(angi.gradeDetails).forEach((value) => {
      if(value.hasOwnProperty(i)){
        value[i] == null ? rowData.push('Soon...') : rowData.push(value[i]);
      }
      else rowData.push('');
    })
    tableData.push(rowData);
  }

  tableFoot = [];
  Object.keys(angi.gradeProgress).forEach((key) => {
    object.hasOwnProperty(key) ? tableFoot.push(`${object[key]}/${angi.grades[key]}`) : null ;
  }); 

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <Table borderStyle={{borderWidth: 1, borderColor: 'black'}}>
          <Col data={leftHead} heightArr={heightArr} style={styles.header} textStyle={styles.text}/>
        </Table>

        <View>
          <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
            <Row data={tableHead} widthArr={widthArr} style={styles.header} textStyle={styles.text}/>
          </Table>
          <ScrollView style={styles.dataWrapper}>
            <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
              {
                tableData.map((rowData, index) => (
                  <Row
                    key={index}
                    data={rowData}
                    widthArr={widthArr}
                    style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                    textStyle={styles.textData}
                  />
                ))
              }
            </Table>
          </ScrollView>
          <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
            <Row data={tableFoot} widthArr={widthArr} style={styles.footer} textStyle={styles.text}/>
          </Table>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff', },
  header: { height: 40, backgroundColor: '#822321' },
  footer: {height: 40, backgroundColor: '#822321'},
  text: { textAlign: 'center', fontWeight: '400', color: 'white' },
  textData: { textAlign: 'center', fontWeight: '300', },
  dataWrapper: { marginTop: -1 },
  row: { height: 30, backgroundColor: '#E7E6E1' }
})

export default Grades