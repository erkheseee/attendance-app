import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import SignIn from '../screens/SignIn';
import ConfirmCode from '../screens/ConfirmCode';
import ForgotPassword from '../screens/ForgotPassword';
import ResetPassword from '../screens/ResetPassword';
import Home from '../screens/Home';
import Classes from '../screens/Classes';
import Schedule from '../screens/Schedule';
import Grades from '../screens/Grades';
import Assignments from '../screens/Assignments';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const data = {
    userID: 'se20d005',
    userPassword: '0000',
    userName: 'Т.Эрхэс',
    userMajor: 'Програм Хангамж',
    userImage: '',
  }

  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='SignIn'>
            <Stack.Screen name='SignIn'>{(props) => <SignIn {...data} />}</Stack.Screen>
            <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
            <Stack.Screen name='ConfirmCode' component={ConfirmCode} />
            <Stack.Screen name='ResetPassword' component={ResetPassword} />

            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Classes' component={Classes} />
            <Stack.Screen name='Schedule' component={Schedule} />
            <Stack.Screen name='Grades' component={Grades} />
            <Stack.Screen name='Assignments' component={Assignments} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation