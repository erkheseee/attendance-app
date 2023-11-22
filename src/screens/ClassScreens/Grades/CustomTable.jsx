import { View, ScrollView, StyleSheet } from 'react-native'
import {React} from 'react'
import { Table, Col, Row } from 'react-native-table-component';
import { getGradeProgress } from '../../Classes/getScores'

const CustomTable = ({angi}) => {

    const {object, gradeProgress} = getGradeProgress(angi);

    let tableHead = [];
    let widthArr = [];
    let cellCounter = 0;
  
    let leftHead = [' Week   '];
    heightArr = [40];
    for(let i=1; i<17; i++){
      leftHead.push(i);
      heightArr.push(30);
    }
    leftHead.push('');
    heightArr.push(40);
  
    Object.keys(angi.grades).forEach((dun) => {
      tableHead.push(dun);
      cellCounter++});
    tableHead.push("Нийт");

    for(let i=1; i<cellCounter+2; i++){
      widthArr.push(100);
    }
  
    const tableData = []
    for(let i=1; i<17; i++){
      const rowData = []
      Object.values(angi.gradeDetails).forEach((value) => {
        if(value.hasOwnProperty(i)){
          value[i] == null ? rowData.push('Soon...') : rowData.push(value[i]);
        }
        else rowData.push('');
      })
      rowData.push("total of week");
      tableData.push(rowData);
    }
  
    tableFoot = [];
    Object.keys(angi.gradeProgress).forEach((key) => {
      object.hasOwnProperty(key) ? tableFoot.push(`${object[key]}/${angi.grades[key]}`) : null ;
    }); 
    tableFoot.push(`${gradeProgress}/100`);
  
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
              <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                <Col data={leftHead} heightArr={heightArr} style={styles.header} textStyle={styles.text}/>
              </Table>
              <ScrollView horizontal={true} bounces={false}>
                <View>
                  <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                    <Row data={tableHead} widthArr={widthArr} style={styles.header} textStyle={styles.text}/>
                  </Table>
                  <View style={styles.dataWrapper}>
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
                  </View>
                  <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                    <Row data={tableFoot} widthArr={widthArr} style={styles.footer} textStyle={styles.text}/>
                  </Table>
                </View>
            </ScrollView>
        </View>
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

export default CustomTable