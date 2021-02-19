import React, { FunctionComponent } from 'react';
import { Text, TextProps } from 'react-native-elements';

interface CustomTextProps extends TextProps {
    fontSize: number,
    bold?: boolean
}

interface Props extends TextProps {
    bold?: boolean
}

export const TextSmall: FunctionComponent<Props> = (props) => (
    <Text {...props} style={[{ fontSize: 10, fontWeight: props.bold ? 'bold' : 'normal' }, props.style]} />
);

export const TextMedium: FunctionComponent<Props> = (props) => (
    <Text {...props} style={[{ fontSize: 15, fontWeight: props.bold ? 'bold' : 'normal' }, props.style]} />
);

export const TextLarge: FunctionComponent<Props> = (props) => (
    <Text {...props} style={[{ fontSize: 20, fontWeight: props.bold ? 'bold' : 'normal' }, props.style]} />
);

export const TextExtraLarge: FunctionComponent<Props> = (props) => (
    <Text {...props} style={[{ fontSize: 25, fontWeight: props.bold ? 'bold' : 'normal' }, props.style]} />
);

export const TextCustomSize: FunctionComponent<CustomTextProps> = (props) => (
    <Text {...props} style={[{ fontSize: props.fontSize, fontWeight: props.bold ? 'bold' : 'normal' }, props.style]} />
);
