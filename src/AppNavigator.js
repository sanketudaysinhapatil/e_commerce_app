import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './Screens/Splash';
import Login from './Screens/Login';
import Home from './Screens/Home';
import RegisterPage from './Screens/Signup';
import MyAddress from './Screens/MyAddress';
import AddAddress from './Screens/AddAddress';
import Checkout from './Screens/Checkout';
import OrderSuccess from './Screens/OrderSuccess';
import OrderFailure from './Screens/OrderFailure';
import Orders from './Screens/Orders';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Splash"
          component={Splash}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Signup"
          component={RegisterPage}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="MyAddress"
          component={MyAddress}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="AddAddress"
          component={AddAddress}
        />
         <Stack.Screen
          options={{headerShown: false}}
          name="Checkout"
          component={Checkout}
        />
         <Stack.Screen
          options={{headerShown: false}}
          name="OrderSuccess"
          component={OrderSuccess}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="OrderFailure"
          component={OrderFailure}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Orders"
          component={Orders}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
