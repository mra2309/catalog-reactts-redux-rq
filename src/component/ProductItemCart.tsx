/* eslint-disable no-bitwise */
import React, {FC} from 'react';
import {Product} from '../utils/types';
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {addToCart, removeFromCart} from '../reducers/cartSlice';

interface ProductItemCartProps {
  data: Product;
}

const ProductItemCart: FC<ProductItemCartProps> = ({data}) => {
  const dispatch = useDispatch();

  const addToCartTogle = (input: any) => {
    dispatch(addToCart(input));
  };

  const removeCartTogle = (input: any) => {
    dispatch(removeFromCart(input));
  };

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.flex}>
        {/* Gambar di sebelah kiri */}
        <Image
          source={{uri: data.images[0] ?? null}}
          style={styles.image}
          resizeMode="cover"
        />

        {/* Teks di sebelah kanan */}
        <View style={styles.textContainer}>
          <Text style={styles.type}>{data.category}</Text>
          <Text style={styles.title}>{data.title}</Text>
          <View style={styles.flex}>
            <Text style={styles.price}>$ {data.price}</Text>
            <Text style={styles.price}> X </Text>
            <Text style={styles.price}>{data.quantity}</Text>
            <Text style={styles.price}> = </Text>
            <Text style={styles.price}>
              $ {data.price * (data.quantity ? data.quantity : 1)}
            </Text>
          </View>
          <Text style={styles.quantity}>
            Quantity: {data.quantity ? data.quantity : 1} Unit /pcs
          </Text>
          <View style={styles.flex}>
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
              onPress={() => removeCartTogle(data)}>
              <Icon name="remove-circle-outline" color={'#555'} size={20} />
            </TouchableHighlight>
            <Text style={styles.quantityCounter}>
              {data.quantity ? data.quantity : 1}
            </Text>
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
              onPress={() => addToCartTogle(data)}>
              <Icon name="add-circle-outline" color={'#555'} size={20} />
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    padding: 10,
    width: '100%',
    height: 120,
    borderRadius: 5,
    marginVertical: 5,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginRight: 10,
  },
  textContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 5,
  },
  type: {
    color: 'red',
    fontSize: 12,
    marginBottom: 5,
  },
  price: {
    color: 'green',
    fontSize: 11,
    marginBottom: 5,
  },
  quantity: {
    color: '#555',
    fontSize: 10,
  },
  quantityCounter: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: '#555',
    fontSize: 10,
  },
});

export default ProductItemCart;
