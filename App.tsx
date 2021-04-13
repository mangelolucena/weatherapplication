import * as React from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import RootStack from './src/navigation/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import store from 'state/store';


export default class AppComponent extends React.Component {

  public render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}
