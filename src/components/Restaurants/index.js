import React, { useState, useEffect } from 'react';

import { MaterialIcons } from '@expo/vector-icons';
//import Foodcategory from './Menu/Foodcategory';
import {
  Container,
  Header,
  Title,
  RestaurantList,
  Item,
  ItemImage,
  ItemInfo,
  ItemTitle,
  ItemDescription,
  Star,
  Categories,
  Distance,
  Delay,
} from './styles';

import api from '../../services/api';

export default function Restaurants({ navigation, title, display }) {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    async function loadRestaurants() {
      const response = await api.get('restaurants.json');
      setRestaurants(response.data);
    }
    loadRestaurants();
  }, []);
  //
  return (
    <Container>
      <Header display={display}>
        <Title>{title}</Title>
      </Header>

      <RestaurantList>
        {restaurants.map(item => (
          <Item
            key={item.id}
            onPress={() => {
              navigation.navigate('FoodCategory', item);
            }}
          >
            <ItemImage
              source={{
                uri: item.restaurant_url,
              }}
            />
            <ItemInfo>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemDescription>
                <MaterialIcons name="star" size={20} color="#ff7b00" />
                <Star>{item.star ? item.star : 'Nouveau!'} </Star>
                <Categories>{item.categories} </Categories>
                <Distance>{item.distance}</Distance>
              </ItemDescription>
              <Delay>{item.delay}</Delay>
            </ItemInfo>
          </Item>
        ))}
      </RestaurantList>
    </Container>
  );
}
