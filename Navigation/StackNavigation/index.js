import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '../../Screen/WelcomeScreen/Index';
import ButtonScreen from '../../Screen/LoginScreen/ButtonScreen';
import Vendor from '../../Screen/LoginScreen/Vendor/Index';
import Customer from '../../Screen/LoginScreen/customer/Index';
import CustomerSignUp from '../../Screen/SignupScreen/Customer/Index';
import VendorSignUp from '../../Screen/SignupScreen/Vendor/Index';
import Home from '../../Screen/HomeScreen/Home';
import get_customer from '../../Screen/Vendor Screens/get_customer';
import check_history from '../../Screen/Vendor Screens/check_history';
import set_profile from '../../Screen/Vendor Screens/set_profile';
import VenProfileButton from '../../Screen/Vendor Screens/vendor_profile_button';
import HomeCustomer from '../../Screen/HomeScreen/HomeCustomer';
import Book_mechanic from '../../Screen/CustomerScreens/book_mechanic';
import Search_screen from '../../Screen/CustomerScreens/search_screen';
import check_history_c from '../../Screen/CustomerScreens/check_history_c';
import set_profile_c from '../../Screen/CustomerScreens/set_profile_c';
import CusProfileButton from '../../Screen/CustomerScreens/customer_profile_button';
export default function Stack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName='Welcome'>
      <Stack.Screen name="Welcome" component={Welcome} options={{
        headerShown: false
      }}/>
      <Stack.Screen name='Login' component={ButtonScreen} options={{
        headerShown: false
      }}/>
      <Stack.Screen name='Vendor' component={Vendor}  options={{
        headerTitle:"LogIn"
      }}/>
      <Stack.Screen name='Customer' component={Customer}  options={{
        headerTitle:"LogIn"
      }}/>
      <Stack.Screen name='customerSignUp' component={CustomerSignUp}  options={{
        headerTitle:"SignUp"
      }}/>
      <Stack.Screen name='vendorSignUp' component={VendorSignUp}  options={{
        headerTitle:"SignUp"
      }}/>
      <Stack.Screen name='Home' component={Home}  options={{
        headerTitle:"Home"
      }}/>
      <Stack.Screen name='GetCustomer' component={get_customer}  options={{
        headerTitle:"Get Customer"
      }}/>
      <Stack.Screen name='CheckHistory' component={check_history}  options={{
        headerTitle:"Check History"
      }}/>
      <Stack.Screen name='SetProfile' component={set_profile}  options={{
        headerTitle:"Set Profile"
      }}/>
      <Stack.Screen name='VenProfileButton' component={VenProfileButton}  options={{
        headerTitle:"Profile"
      }}/>
      <Stack.Screen name='HomeCustomer' component={HomeCustomer}  options={{
        headerTitle:"Home"
      }}/>
      <Stack.Screen name='BookMechanic' component={Book_mechanic}  options={{
        headerTitle:"Book Mechanic"
      }}/>
      <Stack.Screen name='Search_screen' component={Search_screen}  options={{
        headerTitle:"Mechanic's Available"
      }}/>
      <Stack.Screen name='check_history_c' component={check_history_c}  options={{
        headerTitle:"Check History"
      }}/>
      <Stack.Screen name='set_profile_c' component={set_profile_c}  options={{
        headerTitle:"Profile"
      }}/>
      <Stack.Screen name='customer_profile_button' component={CusProfileButton}  options={{
        headerTitle:"Customer Profile"
      }}/>


    </Stack.Navigator>
  );
}
