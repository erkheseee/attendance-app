import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

const ClassGrade = ({ children }) => {
    const tableHead = ['', 'Авсан', 'Авах'];
    const tableTitle = ['Ирц', 'Семинар', 'Бие Даалт', 'Шалгалт'];
    const tableData = [
        ['10%', '10%'],
        ['30%', '30%'],
        ['30%', '30%'],
        ['30%', '30%'],
    ];
    const tableFoot = [ 'Нийт', '100%', '100%']

    return (
        <View style={styles.tableContainer}>
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
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    tableContainer: {
        flex: 1,
        padding: 16,
        paddingTop: 30,
        backgroundColor: '#822321',
        borderRadius: 30,
        marginHorizontal: '5%',
        marginBottom: 140,
        borderWidth: 2,
    },
    head: { height: 40, },
    wrapper: { flexDirection: 'row' },
    title: { flex: 1, alignItems: 'flex-start' },
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

export default ClassGrade