import React, {FunctionComponent} from 'react';
import {Card as CardComponent, CardProps} from 'react-native-elements';
import {styles} from './styles';

export const Card: FunctionComponent<CardProps> = (props) => (
  <CardComponent containerStyle={[styles.card, props.containerStyle]}>
    {props.children}
  </CardComponent>
);
