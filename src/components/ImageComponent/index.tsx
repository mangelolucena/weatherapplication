import React, { FunctionComponent } from 'react';
import { ImageProps, Image } from 'react-native-elements';

export const ImageComponent: FunctionComponent<ImageProps> = (props) => (
    <Image
        resizeMode='contain'
        {...props}
        style={[{ height: 200, width: 200 }, props.style]} />
);
