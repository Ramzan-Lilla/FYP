import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../Screen/HomeScreen/Home';
// import Login from '../../Screen/LoginScreen/Index';
import Stack from '../StackNavigation';

export default function Tab() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      {/* <Tab.Screen name="Settings" component={Login} /> */}
    </Tab.Navigator>
  );
}
