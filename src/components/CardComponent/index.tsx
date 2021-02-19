import React, { FunctionComponent } from "react";
import { View, ViewProps } from "react-native";
import { styles } from './styles';

export const CardComponent: FunctionComponent<ViewProps> = (props) => (
    <View style={[styles.card, props.style]}>
        {
            props.children
        }
    </View>
)

