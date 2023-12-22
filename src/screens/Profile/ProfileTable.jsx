import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

const ProfileGrade = ({ children }) => {
    const tableHead = ['Хувийн Мэдээлэл'];
    const tableTitle = ['Овог:', 'Нэр:', 'Төрсөн өдөр:', 'Нас:', 'Хүйс', 'Регистрийн дугаар:', 'Яс Үндэс:', 'Утас:', 'Гэрийн хаяг:'];
    const tableData = [['','Тамир'], ['','Эрхэс'], ['','2001-12-11'], ['','22'], ['','Эр'], ['','УХ01321116'], ['','Халх'], ['','91152002'], ['','УБ, ХУД, 15-р хороо']];

    return (
        <View style={styles.tableContainer}>
            <Table style={{marginBottom: 4}}>
                <Row data={tableHead} flexArr={[1]} style={styles.head} textStyle={[styles.text, {textAlign: 'center',}]} />
                <View style={{backgroundColor: 'white', height: 1, marginBottom: 10,}}></View>
                <TableWrapper style={styles.wrapper}>
                    <Col data={tableTitle} style={styles.title} flexArr={[1]} textStyle={[styles.text]} />
                    <Rows data={tableData} flexArr={[0.1, 1]} style={styles.row} textStyle={[styles.text]} />
                </TableWrapper>
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
        backgroundColor: '#822321',
        borderRadius: 30,
        marginHorizontal: '5%',
        marginBottom: 140,
        borderWidth: 2,
    },
    head: { height: 24, marginBottom: 5,},
    wrapper: { flexDirection: 'row'},
    title: { flex: 1, alignItems: 'flex-end' },
    row: { height: 24, },
    text: { 
        fontWeight: "bold",
        color: 'white',
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 0,
        shadowOffset: {height: 2, width: 2},
    },
})

export default ProfileGrade