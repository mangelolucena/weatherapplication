import React, { FunctionComponent } from 'react';
import { ViewProps, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const ContainerComponent: FunctionComponent<ViewProps> = (props) => (
    <SafeAreaView style={[{ flex: 1 }, props.style]}>
        <LinearGradient style={{
            flex: 1,
            padding: 20
        }}
            locations={[0.5, 0.7, 0.9]}
            colors={['#00B6DB', '#91CFC6', '#D7F2EF']}>
            {props.children}
        </LinearGradient>
    </SafeAreaView>
);