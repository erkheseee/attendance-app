import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import AttendanceData from './AttendanceData';

const AttendanceTable = () => {

    const [rata, setRata] = useState({});

    const tableHead = ['Долоо хоног', 'Оноо', 'Огноо'];
    const tableData = [
        ['1-р', '2/2', '2023-09-06'],
        ['2-р', '1/2', '2023-09-13'],
        ['3-р', '2/2', '2023-09-20'],
        ['4-р', '2/2', '2023-09-27'],
        ['5-р', '0/2', '2023-10-04'],
        ['6-р', '0/2', '2023-10-11'],
        ['7-р', '1/2', '2023-10-18'],
        ['8-р', '0/2', '2023-10-25'],
        ['9-р', '2/2', '2023-11-01'],
        ['10-р', '2/2', '2023-11-08'],
        ['11-р', '1/2', '2023-11-15'],
        ['12-р', '2/2', '2023-11-22'],
        ['13-р', '2/2', '2023-11-29'],
        ['14-р', '1/2', '2023-12-06'],
    ];
    const tableFoot = ['Нийт', '19/28', '']
    const tableObject = AttendanceData();

    const handlePress = (index) => {
        setRata(current => ({...current, id: index}));
    }

    const handleDropDown = (index) => {
        const lec = [`Лекц`, `${tableObject[index]['lec']}`, ``];
        const lab = [`Лаб`, `${tableObject[index]['lab']}`, ``];
        return (
            <>
                <Row data={lec}  flexArr={[20, 1, 20]} style={styles.row} textStyle={styles.text} />
                <Row data={lab}  flexArr={[20, 1, 20]} style={styles.row} textStyle={styles.text} />
            </>
        )
    }

    return (
        <ScrollView style={styles.tableContainer}>
            <Table>
                <Row data={tableHead} flexArr={[1, 1, 1]} style={styles.head} textStyle={styles.text} />
                <View style={{backgroundColor: 'white', height: 1, marginBottom: 10,}}></View>
                        {
                            tableData.map((data, index) => (
                                <TouchableOpacity onPress={() => handlePress(index)}>
                                    <Row data={data} flexArr={[1, 1, 1]} style={styles.row} textStyle={styles.text} />
                                    {rata['id'] == index && handleDropDown(index)}
                                </TouchableOpacity>
                            ))
                        }
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

export default AttendanceTable;