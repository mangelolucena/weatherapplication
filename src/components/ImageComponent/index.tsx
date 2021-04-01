import React, { FunctionComponent } from 'react';
import { ImageProps, Image as ImageComponent } from 'react-native-elements';

export const Image: FunctionComponent<ImageProps> = (props) => (
    <ImageComponent
        resizeMode='contain'
        {...props}
        style={[{ height: 150, width: 150 }, props.style]} />
);
