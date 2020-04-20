import React, { useState, useEffect } from 'react';

import { MaterialIcons } from '@expo/vector-icons';

import {
  Container,
  Item,
  Date,
  Wrapper,
  Restaurant,
  RestaurantImage,
  Info,
  Name,
  OrderDetails,
  OrderNumber,
  Order,
  Evaluation,
  Message,
  Star,
  Menu,
  MenuButton,
  MenuText,
} from './styles';

import api from '../../services/api';

export default function Purchases() {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    async function loadPurchases() {
      const response = await api.get('purchases');

      setPurchases(response.data);
    }
    loadPurchases();
  }, []);

  return (
    <Container>
      {purchases.map(item => (
        <Item key={item.id}>
          <Date>{item.date}</Date>

          <Wrapper>
            <Restaurant>
              <RestaurantImage source={{ uri: item.restaurant_url }} />
              <Info>
                <Name>{item.restaurant_name}</Name>
                <OrderNumber>Commande livrée {item.order_number}</OrderNumber>
              </Info>
            </Restaurant>
            <OrderDetails>
              <Order>{item.order}</Order>
            </OrderDetails>
            <Evaluation>
              <Message>Évaluation de la commande</Message>
              <Star>
                <MaterialIcons name="star" color="#ffcc33" size={20} />
                <MaterialIcons name="star" color="#ffcc33" size={20} />
                <MaterialIcons name="star" color="#ffcc33" size={20} />
                <MaterialIcons name="star" color="#ffcc33" size={20} />
                <MaterialIcons name="star" color="#ffcc33" size={20} />
              </Star>
            </Evaluation>
            <Menu>
              <MenuButton>
                <MenuText>Aide</MenuText>
              </MenuButton>
              <MenuButton>
                <MenuText>Afficher les détails</MenuText>
              </MenuButton>
            </Menu>
          </Wrapper>
        </Item>
      ))}
    </Container>
  );
}
