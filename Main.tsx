import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {useSelector} from 'react-redux';
import SearchProductScreen from './src/page/SearchProductScreen';
import CategoryDetailScreen from './src/page/CategoryDetailScreen';
import HomeTab from './src/tab/HomeTab';
import Splash from './src/component/Splash';
import ProductDetail from './src/page/DetailProduct';
const Stack = createNativeStackNavigator();
export default function Main() {
  const isDarkMode = useSelector((state: any) => state.theme.dark);
  return (
    <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeTab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailProduct"
          component={ProductDetail}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="DetailCategory"
          component={CategoryDetailScreen}
          options={{
            headerShown: true,
            title: 'List Category',
          }}
        />
        <Stack.Screen
          name="SearchProduct"
          component={SearchProductScreen}
          options={{
            headerShown: true,
            title: 'Pencarian Produk',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
