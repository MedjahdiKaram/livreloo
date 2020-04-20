import React from 'react';

import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import Person from '../../components/Header/Person';

import {
  Container,
  OptionsList,
  Option,
  Info,
  Title,
  Description,
  Wrapper,
  AdditionalMenu,
  AdditionalOption,
  OptionName,
} from './styles';

export default function Profile({ navigation }) {
  return (
    <Container>
      <OptionsList>
        <Option onPress={() => {}}>
          <MaterialCommunityIcons name="bell-outline" size={35} color="#333" />
          <Info>
            <Title>Notifications</Title>
            <Description>Mon centre de notification</Description>
          </Info>
          <MaterialIcons
            name="keyboard-arrow-right"
            color="#999999"
            size={20}
          />
        </Option>
        <Option onPress={() => navigation.navigate('Wallet')}>
          <MaterialCommunityIcons
            name="wallet-outline"
            size={35}
            color="#333"
          />
          <Info>
            <Title>Portefeuille</Title>
            <Description>Mon solde et mon code QR</Description>
          </Info>
          <MaterialIcons
            name="keyboard-arrow-right"
            color="#999999"
            size={20}
          />
        </Option>
        <Option onPress={() => {}}>
          <MaterialCommunityIcons
            name="ticket-outline"
            size={35}
            color="#333"
          />
          <Info>
            <Title>Coupons</Title>
            <Description>Mes coupons de réduction</Description>
          </Info>
          <MaterialIcons
            name="keyboard-arrow-right"
            color="#999999"
            size={20}
          />
        </Option>
        <Option onPress={() => {}}>
          <MaterialCommunityIcons name="heart-outline" size={35} color="#333" />
          <Info>
            <Title>Mes favoris</Title>
            <Description>Mes endroits préférés</Description>
          </Info>
          <MaterialIcons
            name="keyboard-arrow-right"
            color="#999999"
            size={20}
          />
        </Option>
        <Option onPress={() => {}}>
          <MaterialCommunityIcons name="credit-card" size={35} color="#333" />
          <Info>
            <Title>Modes de paiement</Title>
            <Description>Mes modes de paiement</Description>
          </Info>
          <MaterialIcons
            name="keyboard-arrow-right"
            color="#999999"
            size={20}
          />
        </Option>
        <Option onPress={() => {}}>
          <MaterialCommunityIcons name="map-marker" size={35} color="#333" />
          <Info>
            <Title>Adresses</Title>
            <Description>Mes adresses de livraison</Description>
          </Info>
          <MaterialIcons
            name="keyboard-arrow-right"
            color="#999999"
            size={20}
          />
        </Option>
      </OptionsList>

      <AdditionalMenu>
        <AdditionalOption>
          <Wrapper>
            <MaterialCommunityIcons name="lifebuoy" size={35} color="#cecece" />
            <OptionName>Aide</OptionName>
          </Wrapper>
          <MaterialIcons
            name="keyboard-arrow-right"
            color="#999999"
            size={20}
          />
        </AdditionalOption>
        <AdditionalOption>
          <Wrapper>
            <MaterialCommunityIcons
              name="settings-outline"
              size={35}
              color="#cecece"
            />
            <OptionName>Paramètres</OptionName>
          </Wrapper>
          <MaterialIcons
            name="keyboard-arrow-right"
            color="#999999"
            size={20}
          />
        </AdditionalOption>
        <AdditionalOption>
          <Wrapper>
            <MaterialIcons name="security" size={35} color="#cecece" />
            <OptionName>La sécurité</OptionName>
          </Wrapper>
          <MaterialIcons
            name="keyboard-arrow-right"
            color="#999999"
            size={20}
          />
        </AdditionalOption>
        <AdditionalOption>
          <Wrapper>
            <MaterialIcons
              name="store-mall-directory"
              size={35}
              color="#cecece"
            />
            <OptionName>Proposer des restaurants</OptionName>
          </Wrapper>
          <MaterialIcons
            name="keyboard-arrow-right"
            color="#999999"
            size={20}
          />
        </AdditionalOption>
        <AdditionalOption>
          <Wrapper>
            <MaterialCommunityIcons name="rocket" size={35} color="#cecece" />
            <OptionName>Devenez partenaire</OptionName>
          </Wrapper>
          <MaterialIcons
            name="keyboard-arrow-right"
            color="#999999"
            size={20}
          />
        </AdditionalOption>
      </AdditionalMenu>
    </Container>
  );
}

Profile.navigationOptions = ({ navigation }) => ({
  headerTitleStyle: {
    display: 'none',
  },
  headerStyle: {
    height: 130,
  },
  headerLeft: () => <Person />,
});
