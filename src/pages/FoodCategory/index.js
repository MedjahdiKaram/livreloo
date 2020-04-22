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

export default function FoodCategory({ navigation }) {
  const foods_category = navigation.getParam('foods_category') ? (
    navigation
      .getParam('foods_category')
      .map(item => <Message>{item.category_name}</Message>)
  ) : (
    <Message>NO DATA.</Message>
  );
  return <Container>{foods_category}</Container>;
}

FoodCategory.navigationOptions = ({ navigation }) => ({
  headerBackTitleVisible: false,
  title: navigation.getParam('title'),
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
