import React from 'react';
import {StyleSheet, View} from 'react-native';
import ProductCart from '../component/ProductCart';

export default function CartScreen() {
  return (
    <View style={styles.container}>
      <ProductCart />
    </View>
  );
}

const styles = StyleSheet.create({
  textHeader: {
    fontWeight: '500',
    color: 'white',
  },
  container: {
    paddingHorizontal: 12,
    paddingTop: 10,
  },
  containerHeader: {
    backgroundColor: 'red',
    color: 'white',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
});
