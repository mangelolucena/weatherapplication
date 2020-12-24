import * as React from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';

export interface AppProps {
}

export interface AppState {
}

export default class ScreenA extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
      <View>
         <Text>App Component 1</Text>
      </View>
    );
  }
}
