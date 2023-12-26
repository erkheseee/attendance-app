import { View, ScrollView, useWindowDimensions, StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const AttendanceTable = () => {
    const tableHead = ['Долоо хоног', 'Ирц', 'Огноо'];
    const tableData = [
        ['Лекц 1', '+', '2023-09-06'],
        ['Лекц 2', '+', '2023-09-13'],
        ['Лекц 3', '+', '2023-09-20'],
        ['Лекц 4', '+', '2023-09-27'],
        ['Лекц 5', '-', '2023-10-04'],
        ['Лекц 6', '-', '2023-10-11'],
        ['Лекц 7', '+', '2023-10-18'],
        ['Лекц 8', '-', '2023-10-25'],
        ['Лекц 9', '+', '2023-11-01'],
        ['Лекц 10', '+', '2023-11-08'],
        ['Лекц 11', '-', '2023-11-15'],
        ['Лекц 12', '-', '2023-11-22'],
        ['Лекц 13', '+', '2023-11-29'],
        ['Лекц 14', '-', '2023-12-06'],
    ];
    const tableData2 = [
        ['Лаб 1', '-', '2023-09-06'],
        ['Лаб 2', '-', '2023-09-13'],
        ['Лаб 3', '+', '2023-09-20'],
        ['Лаб 4', '+', '2023-09-27'],
        ['Лаб 5', '+', '2023-10-04'],
        ['Лаб 6', '+', '2023-10-11'],
        ['Лаб 7', '+', '2023-10-18'],
        ['Лаб 8', '-', '2023-10-25'],
        ['Лаб 9', '+', '2023-11-01'],
        ['Лаб 10', '-', '2023-11-08'],
        ['Лаб 11', '+', '2023-11-15'],
        ['Лаб 12', '+', '2023-11-22'],
        ['Лаб 13', '+', '2023-11-29'],
        ['Лаб 14', '-', '2023-12-06'],
    ];
    const tableFoot = ['Нийт', '8', '14'];
    const tableFoot2 = ['Нийт', '9', '14'];

    const FirstRoute = () => (
        <ScrollView style={styles.tableContainer}>
        <Table>
            {/* <Row data={tableHead} flexArr={[1, 1, 1]} style={styles.head} textStyle={styles.text} /> */}
            <View style={{backgroundColor: 'white', height: 1, marginBottom: 10,}}></View>
            {
                tableData.map(data => (
                    <Row data={data} flexArr={[1, 1]} style={styles.row} textStyle={styles.text} />
                ))
            }
            <View style={{backgroundColor: 'white', height: 1, marginTop: 10,}}></View>
            <Row data={tableFoot} flexArr={[1, 1, 1]} style={styles.head} textStyle={styles.text} />
        </Table>
    </ScrollView>
    );

    const SecondRoute = () => (
        <ScrollView style={styles.tableContainer}>
        <Table>
            {/* <Row data={tableHead} flexArr={[1, 1, 1]} style={styles.head} textStyle={styles.text} /> */}
            <View style={{backgroundColor: 'white', height: 1, marginBottom: 10,}}></View>
            {
                tableData2.map(data => (
                    <Row data={data} flexArr={[1, 1]} style={styles.row} textStyle={styles.text} />
                ))
            }
            <View style={{backgroundColor: 'white', height: 1, marginTop: 10,}}></View>
            <Row data={tableFoot2} flexArr={[1, 1, 1]} style={styles.head} textStyle={styles.text} />
        </Table>
    </ScrollView>
    );

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
    });

    const layout = useWindowDimensions();

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'Лекц' },
        { key: 'second', title: 'Лаб' },
    ]);


    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={props =>
                <TabBar
                    {...props}
                    indicatorStyle={{ backgroundColor: '#D9BDBC' }}
                    style={{ backgroundColor: '#9b4e4d', borderTopWidth: 1}}
                    labelStyle={{
                        fontSize: 12,
                        fontWeight: "bold",
                        color: 'white',
                        alignSelf: 'center',
                        shadowColor: 'black',
                        shadowOpacity: 1,
                        shadowRadius: 0,
                        shadowOffset: { height: 2, width: 2 },
                    }}
                    tabStyle={{ alignContent: 'space-between' }}
                />
            }
        />
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