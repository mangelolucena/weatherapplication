import React, {FunctionComponent} from 'react';
import {Text as TextComponent, TextProps} from 'react-native-elements';

export const Text: FunctionComponent<TextProps> = (props) => (
  <TextComponent {...props} style={[{fontSize: 14}, props.style]} />
);
