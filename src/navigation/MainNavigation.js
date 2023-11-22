import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Classes from '../screens/Classes';
import Schedule from '../screens/Schedule';
import Grades from '../screens/ClassScreens/Grades';
import Assignments from '../screens/Assignments';
import Class from '../screens/ClassScreens/Class';
import AllGrades from '../screens/ClassScreens/AllGrades';

const Stack = createNativeStackNavigator();

const MainNavigation = (props) => {
    const user = props;
  return (
        <Stack.Navigator screenOptions={{ headerTransparent: true ,headerBackTitleVisible:false, headerStyle: {backgroundColor: '#822321'}, headerTitleStyle: {color: 'white'}, headerTintColor: 'white'}}>
            <Stack.Screen name='Home' options={{headerShown: false}}>{() => <Home {...user}/>}</Stack.Screen>
            <Stack.Screen name='Classes' component={Classes} options={({ route }) => ({ headerTitle: "Хичээлүүд" })}/>
            <Stack.Screen name='Schedule' component={Schedule} options={{headerTitle: "Хичээлийн хуваарь"}}/>
            <Stack.Screen name='AllGrades' component={AllGrades} options={{headerTitle: `Дүнгүүд`}}/>
            <Stack.Screen name='Grades' component={Grades} options={({ route }) => ({headerTitle: `${route.params.className} - Дүн`})}/>
            <Stack.Screen name='Assignments' component={Assignments} options={{headerTitle: " "}}/>

            <Stack.Screen name='Class' component={Class} options={({ route }) => ({ headerTitle: route.params.type })}/>
        </Stack.Navigator>
  )
}

export default MainNavigation