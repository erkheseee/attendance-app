import { View, ScrollView, StyleSheet, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import classesData from '../../Classes/classesData';
import { Table, Col, Row } from 'react-native-table-component';
import { getGradeProgress } from '../../Classes/getScores';

const AllGrades = ({navigation}) => {

    const elementButton = (angi) => (
        <TouchableOpacity style={{paddingHorizontal: 2}} onPress={() => navigation.navigate('Grades', {angi: angi, className: angi.name})}>
          <View>
            <Text style={{textAlign: 'left', fontWeight: 'bold'}}>{angi.name}</Text>
          </View>
        </TouchableOpacity>
      );

    let classes = classesData();

    let tableHead = ['Багш', 'Хичээл', 'Дүнгийн явц', 'Үнэлгээ'];
    let widthArr = [150, 200, 100, 60];

    let tableData = [];

    for(let i=0; i<classes.length; i++){
        let rowData = [];
        rowData.push(classes[i].teacher);
        rowData.push(elementButton(classes[i]));
        rowData.push(getGradeProgress(classes[i]).gradeProgress);
        tableData.push(rowData);
    }

    return (
        <View style={styles.container}>
            <ScrollView horizontal={true}>
                <View>
                    <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                        <Row data={tableHead} widthArr={widthArr} style={styles.header} textStyle={{textAlign: 'center', color: '#fff'}} />
                    </Table>
                    <ScrollView style={styles.dataWrapper}>
                        <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                            {
                                tableData.map((rowData, index) => (
                                    <Row
                                        key={index}
                                        data={rowData}
                                        widthArr={widthArr}
                                        style={[styles.row, index % 2 && { backgroundColor: '#F7F6E7' }]}
                                        textStyle={styles.text}
                                    />
                                ))
                            }
                        </Table>
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff', marginTop: 60 },
    header: { height: 50, backgroundColor: '#822321' },
    text: { textAlign: 'center', fontWeight: '300', color: 'black' },
    dataWrapper: { marginTop: -1 },
    row: { height: 40, backgroundColor: '#E7E6E1' }
});

export default AllGrades