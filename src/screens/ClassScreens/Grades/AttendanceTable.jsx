import { View, ScrollView, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

const AttendanceTable = () => {
    const tableHead = ['Лекц', 'Ирц', 'Огноо'];
    const tableTitle = ['Лекц 1', 'Лекц 2', 'Лекц 3', 'Лекц 4', 'Лекц 5', 'Лекц 6', 'Лекц 7', 'Лекц 8', 'Лекц 9', 'Лекц 10', 'Лекц 11', 'Лекц 12', 'Лекц 13', 'Лекц 14'];
    const tableData = [
        ['+', '2023-09-06'],
        ['+', '2023-09-13'],
        ['+', '2023-09-20'],
        ['+', '2023-09-27'],
        ['-', '2023-10-04'],
        ['-', '2023-10-11'],
        ['+', '2023-10-18'],
        ['-', '2023-10-25'],
        ['+', '2023-11-01'],
        ['+', '2023-11-08'],
        ['-', '2023-11-15'],
        ['-', '2023-11-22'],
        ['+', '2023-11-29'],
        ['-', '2023-12-06'],
    ];
    const tableFoot = ['Нийт', '8', '14']

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
        shadowRadius: 0,
        shadowOffset: {height: 2, width: 2},
    },
})

export default AttendanceTable;