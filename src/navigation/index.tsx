import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button} from 'components';
import {DetailsScreen, MainScreen} from 'screens';
import {routes, titles} from 'strings';

const Drawer = createDrawerNavigator();

function RootStack() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => (
          <SafeAreaView>
            <Button
              onPress={() => props.navigation.navigate(routes.MAIN_SCREEN)}
              title={titles.HOME}
            />
            <Button
              onPress={() => props.navigation.navigate(routes.DETAILS_SCREEN)}
              title={titles.DETAILS}
            />
          </SafeAreaView>
        )}
        initialRouteName={routes.MAIN_SCREEN}
        screenOptions={{headerShown: false}}>
        <Drawer.Screen name={routes.MAIN_SCREEN} component={MainScreen} />
        <Drawer.Screen name={routes.DETAILS_SCREEN} component={DetailsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;
