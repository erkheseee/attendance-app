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
import Grades from '../screens/ClassScreens/Grades';
import Assignments from '../screens/Assignments';
import Class from '../screens/ClassScreens/Class';
import Attendance from '../screens/ClassScreens/Attendance';

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
        <Stack.Navigator screenOptions={{headerBackTitleVisible:false, headerStyle: {backgroundColor: '#822321'}, headerTitleStyle: {color: 'white'}, headerTintColor: 'white'}} initialRouteName='SignIn'>
            <Stack.Screen name='SignIn' options={{ headerShown: false}}>{(props) => <SignIn {...data} />}</Stack.Screen>
            <Stack.Screen name='ForgotPassword' component={ForgotPassword} options={{headerTitle: null}}/>
            <Stack.Screen name='ConfirmCode' component={ConfirmCode} />
            <Stack.Screen name='ResetPassword' component={ResetPassword} />

            <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
            <Stack.Screen name='Classes' component={Classes} options={({ route }) => ({ headerTitle: (route.params.type == "Grades" ? "Дүнгүүд" : "Хичээлүүд") })}/>
            <Stack.Screen name='Schedule' component={Schedule} options={{headerTitle: "Хичээлийн хуваарь"}}/>
            <Stack.Screen name='Grades' component={Grades} options={{headerTitle: "Хичээлийн дүн"}}/>
            <Stack.Screen name='Assignments' component={Assignments} options={{headerTitle: " "}}/>

            <Stack.Screen name='Class' component={Class} options={({ route }) => ({ headerTitle: route.params.type })}/>
            <Stack.Screen name='Attendance' component={Attendance} options={{headerTitle: " "}}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation