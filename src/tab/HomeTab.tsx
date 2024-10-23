import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreeen from '../page/HomeScreeen';
import CartScreen from '../page/CartScreen';
import {useSelector} from 'react-redux';
import LikeScreen from '../page/LikeScreen';
import {RootState} from '../store';

const Tab = createBottomTabNavigator();

export default function HomeTab() {
  const keranjang = useSelector((state: RootState) => state.cart.data);
  const like = useSelector((state: RootState) => state.like.data);
  return (
    <Tab.Navigator initialRouteName="Feed">
      <Tab.Screen
        name="Homes"
        component={HomeScreeen}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({color}) => (
            <Icon name="home-outline" color={color} size={23} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorit Saya"
        component={LikeScreen}
        options={{
          headerShown: true,
          tabBarLabel: 'Favorit',
          tabBarBadge: like.length,
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({color}) => (
            <Icon name="heart-outline" color={color} size={23} />
          ),
        }}
      />
      <Tab.Screen
        name="Keranjang Saya"
        component={CartScreen}
        options={{
          headerShown: true,
          tabBarLabel: 'Keranjang',
          tabBarBadge: keranjang.length,
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({color}) => (
            <Icon name="cart-outline" color={color} size={23} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
