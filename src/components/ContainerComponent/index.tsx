import React, {FunctionComponent} from 'react';
import {ViewProps, SafeAreaView} from 'react-native';

export const Container: FunctionComponent<ViewProps> = (props) => (
  <SafeAreaView style={[{flex: 1}, props.style]}>
    {props.children}
  </SafeAreaView>
);
