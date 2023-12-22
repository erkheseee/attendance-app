import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../screens/SignIn';
import ConfirmCode from '../screens/ConfirmCode';
import ForgotPassword from '../screens/ForgotPassword';
import ResetPassword from '../screens/ResetPassword';
import Tabs from '../navigation/tabs';

import * as SQLite from "expo-sqlite";

const Stack = createNativeStackNavigator();

const Navigation = () => {

  const db = SQLite.openDatabase("MainDB");
  const [user, setUser] = useState({});

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS USER (USERID TEXT PRIMARY KEY NOT NULL, PASSWORD TEXT NOT NULL)",
        [],
        () => {},
        (error) => console.log(error)
      );
    });
    db.transaction((tx) => {
      tx.executeSql("INSERT INTO USER (USERID, PASSWORD) VALUES (?, ?)", [
        "se20d005",
        "0000",
      ]);
    });
    db.transaction((tx) => {
        tx.executeSql(
          "SELECT USERID, PASSWORD FROM USER",
          null,
          (txObj, resultSet) => setUser(resultSet.rows._array[0]),
          (txObj, error) => console.log(error)
        );
      });
  }, []);

  const data = {
    userID: 'se20d005',
    userPassword: '0000',
    userName: 'Т.Эрхэс',
    userMajor: 'Програм Хангамж',
    userImage: 'https://scontent.fuln2-2.fna.fbcdn.net/v/t1.6435-9/60122027_449738552466000_489798920839364608_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=be3454&_nc_ohc=6RNId0KKKAkAX8Dzfrv&_nc_ht=scontent.fuln2-2.fna&cb_e2o_trans=t&oh=00_AfCz6HV4Bg3-9lcRml1jxiZl1S2pUWkWjtHjbws5Z4J6Pw&oe=658554C4',
  }

  return (
      <NavigationContainer >
        <Stack.Navigator screenOptions={{ headerBackTitleVisible:false, headerStyle: {backgroundColor: '#822321'}, headerTitleStyle: {color: 'white'}, headerTintColor: 'white'}} initialRouteName='SignIn'>
            <Stack.Screen name='SignIn' options={{ headerShown: false}}>{() => <SignIn object={data} sql={user} />}</Stack.Screen>
            <Stack.Screen name='ForgotPassword' component={ForgotPassword} options={{headerTitle: "Нууц үг сэргээх"}}/>
            <Stack.Screen name='ConfirmCode' component={ConfirmCode} />
            <Stack.Screen name='ResetPassword' component={ResetPassword} />
            <Stack.Screen name='Tabs' options={{ headerShown: false}} component={Tabs} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default Navigation