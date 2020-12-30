import React, { FunctionComponent } from 'react';
import { View } from 'react-native';

import { TextComponent } from '../TextComponent';

import Colors from '../../themes/Colors';

interface Props {
    title?: string;
}

export const HeaderComponent: FunctionComponent<Props> = ({
    title
}) => (
        <View style={{ height: 50, justifyContent: 'center', backgroundColor: Colors.primary }}>
            <TextComponent style={{ fontWeight: 'bold', fontSize: 15, paddingHorizontal: 10 }}>{title}</TextComponent>
        </View>
    );