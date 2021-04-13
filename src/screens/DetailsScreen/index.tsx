import {Container, Header, Text} from 'components';
import React from 'react';
import {messages} from 'strings';

export default function DetailsScreen(props: any) {
  return (
    <Container>
      <Header onMenuPress={() => props.navigation.toggleDrawer()} />
      <Text>{messages.SAMPLE_MESSAGE}</Text>
      <Text>{messages.SAMPLE_MESSAGE}</Text>
    </Container>
  );
}
