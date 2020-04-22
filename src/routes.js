import React from 'react';
import { createAppContainer } from 'react-navigation';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import { MaterialIcons } from '@expo/vector-icons';

import Dashboard from './pages/Dashboard';
// import Delivery from './pages/Delivery';
import Search from './pages/Search';
import PrevRequests from './pages/PrevRequests';
import Requests from './pages/Requests';
import Profile from './pages/Profile';
import Wallet from './pages/Wallet';
import Item from './pages/Item';
import Trending from './pages/Trending';
import FoodCategory from './pages/FoodCategory';

const Routes = createAppContainer(
  createBottomTabNavigator(
    {
      Accueil: {
        screen: createStackNavigator(
          {
            Dashboard,
            Wallet,
            Item,
            Trending,
            FoodCategory,
          },
          {
            navigationOptions: {
              tabBarIcon: ({ tintColor }) => (
                <MaterialIcons name="home" size={30} color={tintColor} />
              ),
            },
          }
        ),
      },
      // FoodsCategories: {
      //   screen: createStackNavigator(
      //     {
      //       FoodCategory,
      //     }
      //     // {
      //     //   navigationOptions: {
      //     //     tabBarIcon: ({ tintColor }) => (
      //     //       <MaterialIcons name="person" size={30} color={tintColor} />
      //     //     ),
      //     //   },
      //     // }
      //   ),
      // },
      Recherche: {
        screen: createStackNavigator(
          {
            Search,
          },
          {
            navigationOptions: {
              tabBarIcon: ({ tintColor }) => (
                <MaterialIcons name="search" size={30} color={tintColor} />
              ),
            },
          }
        ),
      },
      Commandes: {
        screen: createStackNavigator(
          {
            Commandes: {
              screen: createMaterialTopTabNavigator(
                {
                  PrevRequests,
                  Requests,
                },
                {
                  navigationOptions: {
                    title: 'COMMANDES',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                      color: '#333',
                    },
                    headerStyle: {
                      shadowRadius: 0,
                      shadowOffset: { height: 0 },
                    },
                  },
                  tabBarOptions: {
                    labelStyle: {
                      color: '#333',
                      fontWeight: 'bold',
                    },
                    style: {
                      backgroundColor: '#fff',
                    },
                    indicatorStyle: {
                      backgroundColor: 'red',
                    },
                  },
                }
              ),
            },
          },
          {
            navigationOptions: {
              tabBarIcon: ({ tintColor }) => (
                <MaterialIcons name="assignment" size={30} color={tintColor} />
              ),
            },
          }
        ),
      },
      Profil: {
        screen: createStackNavigator(
          {
            Profile,
            Wallet,
          },
          {
            navigationOptions: {
              tabBarIcon: ({ tintColor }) => (
                <MaterialIcons name="person" size={30} color={tintColor} />
              ),
            },
          }
        ),
      },
    },
    {
      tabBarOptions: {
        activeTintColor: '#333',
        inactiveTintColor: 'gray',
      },
    }
  )
);

export default Routes;
