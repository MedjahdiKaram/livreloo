import React, { useState } from 'react';
import { View } from 'react-native';

import {
  Container,
  Wrapper,
  Warning,
  Suggestion,
  Image,
  Message,
} from './styles';

export default function Requests() {
  const [requests, setRequests] = useState(null);

  return (
    <Container>
      {requests ? (
        <View />
      ) : (
        <Wrapper>
          <Image />
          <Warning>Aucune commande en cours</Warning>
          <Message>
            <Suggestion>Que diriez-vous d'essayer un nouvel endroit?</Suggestion>
            <Suggestion>Sélectionnez simplement Accueil</Suggestion>
          </Message>
        </Wrapper>
      )}
    </Container>
  );
}

Requests.navigationOptions = {
  title: 'HORAIRE',
};
