import * as React from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import RootStack from './src/navigation/index';

export default class AppComponent extends React.Component {
  public render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <RootStack />
      </SafeAreaView>
    );
  }
}
