import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen/index'

const Stack = createStackNavigator();

function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='MainScreen'
        screenOptions={{ gestureEnabled: false, headerShown: false }}>
        <Stack.Screen
          name='MainScreen'
          component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;