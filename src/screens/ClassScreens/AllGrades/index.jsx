import { View, useWindowDimensions, StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import Header from '../../../components/Header/Header';
import UserCard from '../../../components/UserCard';
import Building from '../../../../assets/images/building.jpeg';
import SemesterGrade from './SemesterGrade';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { BottomSheet } from "react-native-btr";
import Table1 from './Semester/Table1';
import Table2 from './Semester/Table2';
import Table3 from './Semester/Table3';
import Table4 from './Semester/Table4';

const AllGrades = ({ navigation }) => {

    const user = {
        userID: 'se20d005',
        userPassword: '0000',
        userName: 'Т.Эрхэс',
        userMajor: 'Програм Хангамж',
        userImage: 'https://scontent.fuln2-2.fna.fbcdn.net/v/t1.6435-9/60122027_449738552466000_489798920839364608_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=be3454&_nc_ohc=6RNId0KKKAkAX8Dzfrv&_nc_ht=scontent.fuln2-2.fna&cb_e2o_trans=t&oh=00_AfCz6HV4Bg3-9lcRml1jxiZl1S2pUWkWjtHjbws5Z4J6Pw&oe=658554C4',
    }

    const FirstRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#D9BDBC' }}><Table1 /></View>
    );

    const SecondRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#D9BDBC' }}><Table2 /></View>
    );

    const ThirdRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#D9BDBC' }}><Table3 /></View>
    );

    const FourthRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#D9BDBC' }}><Table4 /></View>
    );

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        third: ThirdRoute,
        fourth: FourthRoute,
    });

    const layout = useWindowDimensions();

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'I курс' },
        { key: 'second', title: 'II курс' },
        { key: 'third', title: 'III курс' },
        { key: 'fourth', title: 'IV курс' },
    ]);

    const [visible, setVisible] = useState(false);

    function toggle() {
        setVisible((visible) => !visible);
    }

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={Building} style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: 'rgba(193, 192, 185, 0.75)' }}>
                    <Header title='Нийт Дүн' />
                    <View style={{ flex: 5.5, }}></View>
                    <UserCard name={user.userName} id={'2023-24 Намар'} major={'Дүнгийн голч: 3.05'} semester={'Бакалавр'} picture={user.userImage} />

                    {/* Хичээлийн дүн харах хэсэг */}
                    <>
                        <SemesterGrade>
                            <TouchableOpacity onPress={toggle}>
                                <View style={styles.button}>
                                    <Text style={{ fontWeight: '800' }}>Дэлгэрэнгүй</Text>
                                </View>
                            </TouchableOpacity>
                        </SemesterGrade>
                    </>

                    <BottomSheet
                        visible={visible}
                        onBackButtonPress={toggle}
                        onBackdropPress={toggle}
                    >

                        <TabView
                            navigationState={{ index, routes }}
                            renderScene={renderScene}
                            onIndexChange={setIndex}
                            initialLayout={{ width: layout.width }}
                            style={{ top: '20%' }}
                            renderTabBar={props =>
                                <TabBar
                                    {...props}
                                    indicatorStyle={{ backgroundColor: '#D9BDBC' }}
                                    style={{ backgroundColor: '#822321', borderTopLeftRadius: 60, borderTopRightRadius: 60, borderTopWidth: 4, borderLeftWidth: 1, borderRightWidth: 1, }}
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
                    </BottomSheet>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        backgroundColor: '#D9BDBC',
        borderWidth: 2,
        borderRadius: 50,
        padding: 16,
        alignItems: 'center',
    },
    card: {
        backgroundColor: "#fff",
        height: 250,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default AllGrades