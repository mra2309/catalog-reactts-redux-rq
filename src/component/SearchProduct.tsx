import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {RootState} from '../store';

export default function SearchProduct({navigation}: any) {
  const likedItems = useSelector((state: RootState) => state.like.data);
  const cartItems = useSelector((state: RootState) => state.cart.data);

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.input}
        onPress={() => {
          navigation.push('SearchProduct');
        }}>
        <Text style={styles.inputText}> Search Product</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.button}
        onPress={() => {
          navigation.push('SearchProduct');
        }}>
        <Icon name="search-outline" size={20} color={'white'} />
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.button}
        onPress={() => {
          navigation.navigate('Favorit Saya');
        }}>
        <View>
          <Icon name="heart-outline" size={20} color={'white'} />
          {likedItems.length > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{likedItems.length}</Text>
            </View>
          )}
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.button}
        onPress={() => {
          navigation.navigate('Keranjang Saya');
        }}>
        <View>
          <Icon name="cart-outline" size={20} color={'white'} />
          {cartItems.length > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{cartItems.length}</Text>
            </View>
          )}
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  inputText: {
    color: 'grey',
    fontSize: 15,
  },
  badge: {
    position: 'absolute',
    right: -10,
    top: -10,
    backgroundColor: 'red',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  button: {
    color: 'white',
    paddingHorizontal: 10,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  text: {
    fontSize: 18,
    marginRight: 10,
  },
  input: {
    backgroundColor: 'white',
    height: 40,
    flex: 1,
    paddingHorizontal: 5,
    paddingTop: 10,
    alignContent: 'center',
    borderRadius: 5,
  },
});
