import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

const ExamTable = () => {
    const tableHead = ['Шалгалт', 'Авсан', 'Авах', 'Огноо'];
    const tableTitle = ['Явцын', 'Улирлын'];
    const tableData = [
        ['15', '15', '2023-12-06'],
        ['30', '30', '2023-12-06'],
    ];
    tableFoot = ['Нийт', '45', '45', '']

    return (
        <View style={styles.tableContainer}>
        <Table>
            <Row data={tableHead} flexArr={[1, 1, 1]} style={styles.head} textStyle={styles.text} />
            <View style={{backgroundColor: 'white', height: 1, marginBottom: 10,}}></View>
            <TableWrapper style={styles.wrapper}>
                <Col data={tableTitle} style={styles.title} flexArr={[1]} textStyle={styles.text} />
                <Rows data={tableData} flexArr={[1, 1, 1]} style={styles.row} textStyle={styles.text} />
            </TableWrapper>
            <View style={{backgroundColor: 'white', height: 1, marginTop: 10,}}></View>
            <Row data={tableFoot} flexArr={[1, 1, 1]} style={styles.head} textStyle={styles.text} />
        </Table>
    </View>
)
}

const styles = StyleSheet.create({
tableContainer: {
    flex: 1,
    marginBottom: 140,
    borderWidth: 2,
},
head: { height: 40,},
wrapper: { flexDirection: 'row' },
title: { flex: 1},
row: { height: 28,},
text: { 
    fontWeight: "bold",
    color: 'white',
    alignSelf: 'center',
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowRadius: 0,
    shadowOffset: {height: 2, width: 2},
},
})

export default ExamTable;