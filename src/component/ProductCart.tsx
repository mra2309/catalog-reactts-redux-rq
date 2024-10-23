import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../store'; // Impor RootState
import {Product} from '../utils/types';
import ProductItemCart from './ProductItemCart';

export default function ProductCart() {
  const like = useSelector((state: RootState) => state.cart.data);
  return (
    <View>
      {like.length === 0 ? (
        <View style={styles.containerFull}>
          <Text style={styles.text}>Keranjang Masih Kosong</Text>
        </View>
      ) : (
        <View style={styles.container}>
          <FlatList
            data={like}
            keyExtractor={(item: Product) => item.id.toString()}
            renderItem={({item}) => <ProductItemCart data={item} />}
            horizontal={false}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'grey',
  },
  containerFull: {
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    borderRadius: 5,
  },
  headTect: {
    fontSize: 13,
    color: 'black',
    paddingVertical: 10,
  },
  categoryItem: {
    padding: 10,
    alignItems: 'center',
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 0, 0, 0.1)',
  },
  categoryText: {
    paddingTop: 10,
    fontSize: 10,
  },
});
