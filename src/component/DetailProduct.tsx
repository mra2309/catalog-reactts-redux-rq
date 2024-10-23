/* eslint-disable react/react-in-jsx-scope */
import {FC} from 'react';
import {Product} from '../utils/types';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import Icon from 'react-native-ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {addTolike} from '../reducers/likeSlice';
import {RootState} from '../store'; // Impor RootState
import {addToCart} from '../reducers/cartSlice';

interface DetailProductProps {
  data: Product;
}

const DetailProduct: FC<DetailProductProps> = ({data}) => {
  const dispatch = useDispatch();
  const likedItems = useSelector((state: RootState) => state.like.data);
  const isLiked = likedItems.some((item: Product) => item.id === data.id);

  const toggleLike = (input: any) => {
    console.log('berhasil tambahkan data :', data);
    dispatch(addTolike(input));
  };

  const buttonIntiCart = (input: any) => {
    ToastAndroid.showWithGravity(
      'Sukses Menambahkan Produk Ke Keranjang',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
    dispatch(addToCart(input));
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          source={{uri: data.images[0] ?? null}}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.contentContainer}>
          <View style={styles.flex}>
            <Text style={styles.textGrey}>{data.category}</Text>
            <Text style={styles.textGrey}>{data.warrantyInformation}</Text>
          </View>
          <Text style={styles.title}>{data.title}</Text>
          <View style={styles.flex}>
            <View style={styles.flex}>
              <Text style={styles.price}>$ {data.price} - </Text>
              <Text style={styles.discount}>
                Disc ${data.discountPercentage}
              </Text>
            </View>
            <Icon
              name={isLiked ? 'heart' : 'heart-outline'}
              size={20}
              color="red"
              style={styles.loveIcon}
              onPress={() => {
                toggleLike(data);
              }}
            />
          </View>
          <Text style={styles.textGrey}>Penilaian : {data.rating}</Text>
        </View>

        <View style={styles.descriptionContainer}>
          <Text style={styles.textGrey}>{data.description}</Text>
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            buttonIntiCart(data);
          }}>
          <Text style={styles.buttonText}>+ Keranjang</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buyButton]}>
          <Text style={styles.buttonText}>Beli</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loveIcon: {},
  container: {
    display: 'flex',
    paddingBottom: 20,
  },
  textGrey: {
    color: 'grey',
  },
  contentContainer: {
    padding: 14,
  },
  descriptionContainer: {
    padding: 14,
  },
  image: {
    alignItems: 'center',
    width: '100%',
    height: 450,
    borderRadius: 5,
  },
  title: {
    fontSize: 15,
    color: 'grey',
    fontWeight: '400',
    marginTop: 5,
  },
  flex: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 20,
    color: 'grey',
    fontWeight: '600',
    marginTop: 5,
  },
  discount: {
    marginHorizontal: 10,
    backgroundColor: 'tomato',
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginVertical: 10,
    fontSize: 10,
    marginRight: 20,
    borderRadius: 4,
    color: 'white',
  },
  buttonContainer: {
    position: 'absolute', // Set posisi absolut
    bottom: -70, // Jarak dari bawah
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    marginTop: 10,
  },
  button: {
    flex: 1,
    backgroundColor: 'tomato',
    borderRadius: 5,
    padding: 15,
    margin: 5,
    alignItems: 'center',
  },
  buyButton: {
    backgroundColor: '#28A745',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
});

export default DetailProduct;
