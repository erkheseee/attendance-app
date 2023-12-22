import { View, ScrollView, useWindowDimensions, StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const Table1 = () => {
    const tableHead = ['Хичээл', 'Кредит', 'Дүн'];
    const tableData = [
        ['Математик 1', '4', '70 C+'],
        ['Физик 1', '4', '90 A-'],
        ['Биеийн тамир 1', '2', '100 A+'],
        ['Монголын түүх, соёл, ёс заншил', '3', '98 A+'],
        ['Монгол хэл бичиг, найруулга зүй', '3', '97 A+'],
        ['Англи хэл I', '3', '89 B+'],
        ['Гамшгаас хамгаалах менежментийн үндэс', '1', '93 A'],
        ['Инженерчлэлийн дизайны үндэс', '1', '88 B+'],
    ];
    const tableFoot = ['Нийт', '21', '3.38']

    const tableHead2 = ['Хичээл', 'Кредит', 'Дүн'];
    const tableData2 = [
        ['Биеийн Тамир 2', '1', '90 A-'],
        ['Физик 2', '4', '83 B'],
        ['Компьютерийн ухаан ба програмчлалын үндэс', '3', '80 B-'],
        ['Англи хэл 2', '3', '93 A'],
        ['Ерөнхий хими', '3', '90 A-'],
        ['Математик 2', '4', '84 B'],
    ];
    const tableFoot2 = ['Нийт', '18', '3.21']

    heightArray = [30, 30, 30, 60, 60, 30, 60, 60];

    const FirstRoute = () => (
            <ScrollView style={styles.tableContainer}>
            <Table>
                <Row data={tableHead} flexArr={[3, 1, 1]} style={styles.head} textStyle={styles.text} />
                <View style={{backgroundColor: 'white', height: 1, marginBottom: 10,}}></View>
                <TableWrapper style={styles.wrapper}>
                    {/* <Col data={tableTitle} style={styles.title} flexArr={[3]} textStyle={styles.text} /> */}
                    <Rows data={tableData} flexArr={[3, 1, 1]} style={styles.row} textStyle={styles.text} />
                </TableWrapper>
                <View style={{backgroundColor: 'white', height: 1, marginTop: 10,}}></View>
                <Row data={tableFoot} flexArr={[3, 1, 1]} style={styles.head} textStyle={styles.text} />
            </Table>
        </ScrollView>
    );

    const SecondRoute = () => (
        <ScrollView style={styles.tableContainer}>
            <Table>
                <Row data={tableHead2} flexArr={[3, 1, 1]} style={styles.head} textStyle={styles.text} />
                <View style={{backgroundColor: 'white', height: 1, marginBottom: 10,}}></View>
                <TableWrapper style={styles.wrapper}>
                    {/* <Col data={tableTitle} style={styles.title} flexArr={[3]} textStyle={styles.text} /> */}
                    <Rows data={tableData2} flexArr={[3, 1, 1]} style={styles.row} textStyle={styles.text} />
                </TableWrapper>
                <View style={{backgroundColor: 'white', height: 1, marginTop: 10,}}></View>
                <Row data={tableFoot2} flexArr={[3, 1, 1]} style={styles.head} textStyle={styles.text} />
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
        { key: 'first', title: 'Намар' },
        { key: 'second', title: 'Хавар' },
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
                style={{ backgroundColor: '#9b4e4d', borderTopWidth: 1,}}
                labelStyle={{
                    fontSize: 12,
                    fontWeight: "bold",
                    color: 'white',
                    alignSelf: 'center',
                    shadowColor: 'black',
                    shadowOpacity: 1,
                    shadowRadius: 0.5,
                    shadowOffset: { height: 1, width: 1 },
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
        borderWidth: 1,
        backgroundColor: '#D9BDBC',
    },
    head: { height: 40,},
    wrapper: { flexDirection: 'row' },
    // title: { flex: 1, alignItems: 'flex-start'},
    row: { height: 50,},
    text: { 
        fontWeight: "900",
        color: 'black',
        textAlign: 'center',
    },
})

export default Table1;