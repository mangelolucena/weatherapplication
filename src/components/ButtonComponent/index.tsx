import React, { FunctionComponent } from 'react';
import { Button, ButtonProps } from 'react-native-elements';

export const ButtonComponent: FunctionComponent<ButtonProps> = (props) => (
    <Button {...props} style={props.style} />
);