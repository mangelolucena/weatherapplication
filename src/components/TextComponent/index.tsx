import React, { FunctionComponent } from 'react';
import { Text, TextProps } from 'react-native-elements';

export const TextComponent: FunctionComponent<TextProps> = (props) => (
    <Text {...props} style={props.style} />
);
