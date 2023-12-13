import { View, useWindowDimensions, StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import UserCard from '../../components/UserCard';
import Building from '../../../assets/images/building.jpeg'
import ProfileGrade from './ProfileTable';

const Profile = ({ navigation }) => {

    const user = {
        userID: 'se20d005',
        userPassword: '0000',
        userName: 'Т.Эрхэс',
        userMajor: 'Програм Хангамж',
        userImage: 'https://scontent.fuln2-2.fna.fbcdn.net/v/t1.6435-9/60122027_449738552466000_489798920839364608_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=be3454&_nc_ohc=6RNId0KKKAkAX8Dzfrv&_nc_ht=scontent.fuln2-2.fna&cb_e2o_trans=t&oh=00_AfCz6HV4Bg3-9lcRml1jxiZl1S2pUWkWjtHjbws5Z4J6Pw&oe=658554C4',
    }

    const logout = () => {
      navigation.navigate('SignIn');
    }

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={Building} style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: 'rgba(193, 192, 185, 0.75)' }}>
                    <Header title='Профайл' />
                    <View style={{ flex: 5.5, }}></View>
                    <UserCard name={user.userName} id={user.userID} major={user.userMajor} semester={'IV курс - I семестр'} picture={user.userImage}/>

                    {/* Хичээлийн дүн харах хэсэг */}
                    <>
                        <ProfileGrade>
                            <TouchableOpacity onPress={logout}>
                                <View style={styles.button}>
                                    <Text style={{ fontWeight: '900' }}>Гарах</Text>
                                </View>
                            </TouchableOpacity>
                        </ProfileGrade>
                    </>
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
        marginTop: 5,
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

export default Profile