import React from 'react';

import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import {
  Container,
  BackButton,
  Balance,
  Title,
  Value,
  QrCode,
  Options,
  Option,
  Message,
  Panel,
  Money,
} from './styles';

export default function Wallet() {
  return (
    <Container>
      <Panel>
        <Balance>
          <Title>Le solde dans votre portefeuille</Title>
          <Money>
            <Value>DA 52,70</Value>
            <MaterialIcons name="keyboard-arrow-right" size={20} color="#F00" />
          </Money>
        </Balance>
        <QrCode>
          <MaterialCommunityIcons name="qrcode-scan" color="#F00" size={28} />
          <Title>QR code</Title>
        </QrCode>
      </Panel>

      <Options horizontal>
        <Option onPress={() => {}}>
          <MaterialIcons name="credit-card" size={35} color="#999" />
          <Message>Modes de paiement</Message>
        </Option>
        <Option onPress={() => {}}>
          <MaterialIcons name="card-giftcard" size={35} color="#999" />
          <Message>Utiliser la carte LIVRELOO</Message>
        </Option>
        <Option onPress={() => {}}>
          <MaterialIcons name="store" size={35} color="#999" />
          <Message>Où utiliser</Message>
        </Option>
        <Option onPress={() => {}}>
          <MaterialCommunityIcons name="help-circle" size={35} color="#999" />
          <Message>J'ai besoin d'aide</Message>
        </Option>
      </Options>
    </Container>
  );
}

Wallet.navigationOptions = ({ navigation }) => ({
  headerBackTitleVisible: false,
  title: 'PORTEFEUILLE',
  headerTitleAlign: 'center',
  headerStyle: {
    shadowRadius: 0,
    shadowOffset: {
      height: 0,
    },
  },
  headerLeft: () => (
    <BackButton onPress={() => navigation.goBack()}>
      <MaterialIcons name="keyboard-arrow-left" color="#f00" size={35} />
    </BackButton>
  ),
});
