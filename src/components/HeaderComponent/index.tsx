import React, {FunctionComponent} from 'react';
import {View} from 'react-native';

import {Text} from '../TextComponent';


interface Props {
  title?: string;
}

export const HeaderComponent: FunctionComponent<Props> = ({title}) => (
  <View
    style={{
      height: 50,
      justifyContent: 'center'
    }}>
    <Text style={{fontWeight: 'bold', fontSize: 15, paddingHorizontal: 10}}>
      {title}
    </Text>
  </View>
);
