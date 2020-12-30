import React, { FunctionComponent } from 'react';
import { ViewProps, SafeAreaView } from 'react-native';
import AppStyles from '../../themes/AppStyles';

export const ContainerComponent: FunctionComponent<ViewProps> = (props) => (
    <SafeAreaView style={[AppStyles.container, props.style]}>{props.children}</SafeAreaView>
);