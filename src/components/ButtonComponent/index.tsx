import React, { FunctionComponent } from 'react';
import { Button as ButtonComponent, ButtonProps } from 'react-native-elements';

export const Button: FunctionComponent<ButtonProps> = (props) => (
    <ButtonComponent {...props} style={props.style} />
);