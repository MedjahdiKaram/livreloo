import React from 'react';

import { withNavigation } from 'react-navigation';

import { Container, Button, Title } from './styles';

function HeaderLeft({ navigation }) {
  return (
    <Container>
      <Button onPress={() => navigation.navigate('Dashboard')}>
        <Title>La livraison</Title>
      </Button>
      <Button onPress={() => {}}>
        <Title disabled>Retrait</Title>
      </Button>
    </Container>
  );
}

export default withNavigation(HeaderLeft);
