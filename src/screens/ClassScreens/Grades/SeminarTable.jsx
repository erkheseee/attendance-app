import { View, ScrollView, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

const SeminarTable = () => {
    const tableHead = ['Лаборатори', 'Гүйцэтгэл', 'Огноо'];
    const tableTitle = ['Сем 1', 'Сем 2', 'Сем 3', 'Сем 4', 'Сем 5', 'Сем 6', 'Сем 7', 'Сем 8', 'Сем 9', 'Сем 10', 'Сем 11', 'Сем 12'];
    const tableData = [
        ['+', '2023-09-20'],
        ['+', '2023-09-27'],
        ['+', '2023-10-04'],
        ['+', '2023-10-11'],
        ['+', '2023-10-18'],
        ['+', '2023-10-25'],
        ['+', '2023-11-01'],
        ['-', '2023-11-08'],
        ['-', '2023-11-15'],
        ['+', '2023-11-22'],
        ['+', '2023-11-29'],
        ['+', '2023-12-06'],
    ];
    const tableFoot = ['Нийт', '10/12', ''];

    return (
        <ScrollView style={styles.tableContainer}>
        <Table>
            <Row data={tableHead} flexArr={[1, 1, 1]} style={styles.head} textStyle={styles.text} />
            <View style={{backgroundColor: 'white', height: 1, marginBottom: 10,}}></View>
            <TableWrapper style={styles.wrapper}>
                <Col data={tableTitle} style={styles.title} flexArr={[1]} textStyle={styles.text} />
                <Rows data={tableData} flexArr={[1, 1]} style={styles.row} textStyle={styles.text} />
            </TableWrapper>
            <View style={{backgroundColor: 'white', height: 1, marginTop: 10,}}></View>
            <Row data={tableFoot} flexArr={[1, 1, 1]} style={styles.head} textStyle={styles.text} />
        </Table>
    </ScrollView>
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
    shadowRadius: 2,
    shadowOffset: {height: 2, width: 2},
},
})

export default SeminarTable;