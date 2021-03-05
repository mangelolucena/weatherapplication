import React, { Component } from 'react';
import RootStack from './src/navigation/index';
import { Provider } from 'react-redux';
import store from './src/redux/store';


export default class AppComponent extends Component {

  public render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}
