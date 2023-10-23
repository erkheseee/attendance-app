import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import SignIn from '../screens/SignIn';
import ConfirmCode from '../screens/ConfirmCode';
import ForgotPassword from '../screens/ForgotPassword';
import ResetPassword from '../screens/ResetPassword';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='SignIn' component={SignIn} />
            <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
            <Stack.Screen name='ConfirmCode' component={ConfirmCode} />
            <Stack.Screen name='ResetPassword' component={ResetPassword} />

            <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation