import { View, Text } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import HomeCustomer from './Screen/HomeScreen/HomeCustomer';
//import HomeVendor from './Screen/HomeScreen/HomeVendor';
import Stack from './Navigation/StackNavigation';
import Tab from "./Navigation/TabNavigation/Index";

export default function App() {
  return (
    <NavigationContainer>
      <Stack/>
      {/* <Tab/> */}
      
    </NavigationContainer>
  )
}