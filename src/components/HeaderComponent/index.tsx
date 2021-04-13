import React, {FunctionComponent} from 'react';
import {Button, Icon} from 'react-native-elements';
import {Header as HeaderComponent} from 'react-native-elements';

import {Text} from '../TextComponent';

interface Props {
  title?: string;
  onMenuPress?: () => void;
}

export const Header: FunctionComponent<Props> = ({title, onMenuPress}) => (
  <HeaderComponent
    leftComponent={<Button onPress={onMenuPress} title="MENU" />}
  />
);
