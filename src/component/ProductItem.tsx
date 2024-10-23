import React, {FC} from 'react';
import {Product} from '../utils/types';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store'; // Impor RootState
import {addTolike} from '../reducers/likeSlice';

interface ProductItemProps {
  data: Product;
  navigation: any;
}

const ProductItem: FC<ProductItemProps> = ({navigation, data}) => {
  const dispatch = useDispatch();

  const likedItems = useSelector((state: RootState) => state.like.data);
  const isLiked = likedItems.some((item: Product) => item.id === data.id);

  const toggleLike = (input: any) => {
    console.log('berhasil tambahkan data :', data);
    dispatch(addTolike(input));
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.push('DetailProduct', {product: data})}>
      <View>
        <Image
          source={{uri: data.images[0] ?? null}}
          style={styles.image}
          resizeMode="cover"
        />
        <Icon
          name={isLiked ? 'heart' : 'heart-outline'}
          size={20}
          color="red"
          style={styles.loveIcon}
          onPress={() => {
            toggleLike(data);
          }}
        />
        <Text style={styles.type}>{data.category}</Text>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.price}>$ {data.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  loveIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  container: {
    padding: 10,
    width: '48%',
    height: 250,
    borderRadius: 5,
    marginVertical: 3,
    marginHorizontal: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  image: {
    alignItems: 'center',
    width: '100%',
    height: 150,
    borderRadius: 5,
  },
  title: {
    fontSize: 13,
    fontWeight: '700',
    marginTop: 5,
    color: 'black',
  },
  type: {
    color: 'red',
    fontSize: 10,
    marginTop: 5,
  },
  price: {
    color: 'red',
    fontSize: 15,
    marginTop: 5,
  },
});

export default ProductItem;
