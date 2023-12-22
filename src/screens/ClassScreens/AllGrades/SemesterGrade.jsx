import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

const SemesterGrade = ({ children }) => {
    const tableHead = ['Семестр', 'Дүн', 'Кредит'];
    const tableTitle = ['Намар', 'Хавар', 'Намар', 'Хавар', 'Намар', 'Хавар',];
    const tableData = [
        ['3.38 B+', '    21'],
        ['3.21 B', '    18'],
        ['2.92 B-', '    15'],
        ['3.02 B', '    17'],
        ['2.51 C+', '    17'],
        ['3.18 B', '    15'],
    ];
    const tableFoot = [ 'Нийт', '3.05 B', '103']

    return (
        <View style={styles.tableContainer}>
            <Table style={{}}>
                <Row data={tableHead} flexArr={[2, 1, 1]} style={styles.head} textStyle={styles.text}/>
                <View style={{backgroundColor: 'white', height: 1, marginBottom: 10,}}></View>
                <TableWrapper style={styles.wrapper}>
                    <Col data={['2020-21', '2021-22', '2022-23']} heightArr={[56,56,56]} textStyle={styles.text} />
                    <Col data={tableTitle} style={styles.title} textStyle={styles.text} />
                    <Rows data={tableData} flexArr={[1, 1]} style={styles.row} textStyle={styles.dataText} />
                </TableWrapper>
                <View style={{backgroundColor: 'white', height: 1, marginTop: 10,}}></View>
                <Row data={tableFoot} flexArr={[2, 1, 1]} style={styles.head} textStyle={styles.text} />
            </Table>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    tableContainer: {
        flex: 7,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 10, height: 10},
        shadowRadius: 3.5,
        elevation: 5,
        padding: 15,
        paddingTop: 5,
        // marginBottom: 30,
        backgroundColor: '#822321',
        borderRadius: 30,
        marginHorizontal: '5%',
        marginBottom: 140,
        borderWidth: 2,
    },
    head: { height: 40, },
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
        // shadowOffset: {height: 2, width: 2},
    },
    dataText: {
        fontWeight: "bold",
        color: 'white',
        paddingLeft: '25%',
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 0,
        textAlign: 'left',
        // shadowOffset: {height: 2, width: 2},
    }
})

export default SemesterGrade