import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AuthStack from './authStack';
import Home from './../screens/home' ;
import Details from './../screens/details' ;

const Stack = createStackNavigator();

const Index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
    
        {/* <Stack.Screen
          options={{header: () => null}}
          name="Auth Stack"
          component={AuthStack}
        
        /> */}

      <Stack.Screen
          options={{header: () => null}}
          name="Home"
          component={Home}
        
        />

    <Stack.Screen
          options={{header: () => null}}
          name="Details"
          component={Details}
        
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Index;
