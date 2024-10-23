import React from 'react';
import {StyleSheet, View} from 'react-native';
import ProductLike from '../component/ProductLike';

export default function LikeScreen({navigation}: any) {
  return (
    <View style={styles.container}>
      <ProductLike navigation={navigation} />
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
