import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  Login  from '../screens/auth/login' ;

const Stack = createStackNavigator();

const  AuthStack = () => {
    return (
        <Stack.Navigator>
          <Stack.Screen
           name="Login"
            component={Login} options={{headerShown: false}} />

          {/* <Stack.Screen
           name="Signup"
            component={Signup} options={{headerShown: false}} />

          <Stack.Screen
           name="Home"
            component={DrawerStack} options={{headerShown: false}} /> */}

        </Stack.Navigator>
    );
  }

  export default AuthStack;