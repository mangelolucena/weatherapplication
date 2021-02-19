import React, { FunctionComponent } from 'react';
import { ImageProps, Image } from 'react-native-elements';

export const ImageComponent: FunctionComponent<ImageProps> = (props) => (
    <Image
        resizeMode='contain'
        {...props}
        style={[{ height: 150, width: 150 }, props.style]} />
);
