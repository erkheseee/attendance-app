import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainNavigation from "../navigation/MainNavigation";
import Profile from '../screens/Profile';
import { View, Text, Image } from "react-native";
import React from "react";

const Tab = createBottomTabNavigator();

const Tabs = (props) => {

  return (
    <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        position: 'absolute',
        bottom: 20,
        left: '5%',
        right: '5%',
        // elevation: 0,
        backgroundColor: '#D9BDBC',
        borderRadius: 15,
        borderWidth: 2,
        borderTopWidth: 2,
        borderTopColor: 'black',
        borderColor: 'black',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 10, height: 10},
        shadowRadius: 3.5,
        elevation: 5,
        height: 75,
      }
    }}
    >
      <Tab.Screen name="Home" options={{
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: 'center', justifyContent: 'center', top:3,}}>
            <Image 
              source={require('../../assets/images/home.png')}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: focused ? '#822321' : 'black',
              }}
            />
            <Text style={{color: focused ? '#822321' : 'black', fontWeight: '900'}}>Нүүр</Text>
          </View>
        ),
      }}>{() => <MainNavigation {...props}/>}</Tab.Screen>
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: 'center', justifyContent: 'center', top:3,}}>
            <Image 
              source={require('../../assets/images/profile.png')}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: focused ? '#822321' : 'black',
              }}
            />
            <Text style={{color: focused ? '#822321' : 'black', fontWeight: '900'}}>Профайл</Text>
          </View>
        ),
      }}/>
    </Tab.Navigator>
  );
};

export default Tabs;
