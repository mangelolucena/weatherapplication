import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native'
import ScreenA from '../screens/ScreenA/index';
import ScreenB from '../screens/ScreenB/index';

const Stack = createStackNavigator();

function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ScreenA"
        screenOptions={{ gestureEnabled: false }}>
        <Stack.Screen
          name="ScreenA"
          component={ScreenA}
          options={{ title: 'My app' }}
        />
        <Stack.Screen
          name="ScreenB"
          component={ScreenB}
          initialParams={{ user: 'me' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;