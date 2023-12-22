import { View, ScrollView, useWindowDimensions, StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const Table3 = () => {
    const tableHead = ['Хичээл', 'Кредит', 'Дүн'];
    const tableData = [
        ['Обеъект хандлагат програмчлалын төсөл', '3', '83 B'],
        ['Веб Програмчлал', '3', '78 C+'],
        ['Програм хагамжийн инженерчлэл', '3', '60 D-'],
        ['Танилцах дадлага', '-', '92 A-'],
        ['Компьютерийн архитектур ба зохиомж', '3', '93 A'],
        ['Үйлдлийн системийн онол', '3', '61 D-'],
    ];
    const tableFoot = ['Нийт', '17', '2.51']

    const tableHead2 = ['Хичээл', 'Кредит', 'Дүн'];
    const tableData2 = [
        ['Үйлдвэрлэлийн дадлага', '3', '99 A+'],
        ['Цахим аюулгүй байдал', '3', '89 B+'],
        ['Компьютерийн сүлжээ', '3', '87 B+'],
        ['Хиймэл оюун ухаан болон машин сургалт', '3', '79 C+'],
        ['Програм хангамжийн шаардлагын шинжилгээ ба зохиомж', '3', '81 B-'],
        ['Магадлалын онол ба статистик', '3', '84 B'],
    ];
    const tableFoot2 = ['Нийт', '18', '3.18']

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

export default Table3;