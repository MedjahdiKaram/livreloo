import React from 'react';

import { MaterialIcons } from '@expo/vector-icons';

import {
  Container,
  ItemImage,
  ItemTitle,
  ItemIngredient,
  ItemPrice,
  OldPrice,
  Info,
  Details,
  Delivery,
  DeliveryTitle,
  DeliveryDelay,
  Wrapper,
  BackButton,
  LeftHeader,
  DrinkHeader,
  Message,
  SubMessage,
  DrinkItem,
  DrinkTitle,
  DrinkPrice,
  Warning,
  WarningText,
} from './styles';

export default function Item({ navigation }) {
  const item = navigation.getParam('item');

  return (
    <Container>
      <Details>
        <ItemImage source={{ uri: item.offer_url }} />
        <ItemTitle>{item.title}</ItemTitle>
        <ItemIngredient>{item.ingredients}</ItemIngredient>
        <Info>
          <ItemPrice>{item.newPrice}</ItemPrice>
          <OldPrice>{item.price}</OldPrice>
        </Info>
        <Delivery>
          <Wrapper>
            <MaterialIcons name={item.icon} size={22} color="#F00000" />
            <DeliveryTitle>{item.delivery}</DeliveryTitle>
          </Wrapper>
          <DeliveryDelay>{item.delay}</DeliveryDelay>
        </Delivery>
      </Details>

      <DrinkHeader>
        <LeftHeader>
          <Message>Les boissons</Message>
          <SubMessage>Choisissez 1 option</SubMessage>
        </LeftHeader>
        <Warning>
          <WarningText>Optionnel</WarningText>
        </Warning>
      </DrinkHeader>
      <DrinkItem>
        <LeftHeader>
          <DrinkTitle>Coca-cola 2lt</DrinkTitle>
          <DrinkPrice>+ DA 11,00</DrinkPrice>
        </LeftHeader>
        <MaterialIcons name="add" size={22} color="#000" />
      </DrinkItem>
      <DrinkItem>
        <LeftHeader>
          <DrinkTitle>Fanta uva 2lt</DrinkTitle>
          <DrinkPrice>+ DA 11,00</DrinkPrice>
        </LeftHeader>
        <MaterialIcons name="add" size={22} color="#000" />
      </DrinkItem>
      <DrinkItem>
        <LeftHeader>
          <DrinkTitle>Jus de fruit de la passion 300ml</DrinkTitle>
          <DrinkPrice>+ DA 9,50</DrinkPrice>
        </LeftHeader>
        <MaterialIcons name="add" size={22} color="#000" />
      </DrinkItem>
      <DrinkItem>
        <LeftHeader>
          <DrinkTitle>Dolly Guaraná</DrinkTitle>
          <DrinkPrice>+ DA 10,00</DrinkPrice>
        </LeftHeader>
        <MaterialIcons name="add" size={22} color="#000" />
      </DrinkItem>
    </Container>
  );
}

Item.navigationOptions = ({ navigation }) => ({
  headerBackTitleVisible: false,
  title: "DÉTAILS DE L'ARTICLE",
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
