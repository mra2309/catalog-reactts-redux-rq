import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import useProductList from '../api/useProductList';
import ProductItem from './ProductItem';
import {SafeAreaView} from 'react-native-safe-area-context';
import ProductCategory from './ProductCategory';
import {useSelector} from 'react-redux';

export default function ProducList({navigation}: any) {
  const isDarkMode = useSelector((state: any) => state.theme.dark);
  const {data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage} =
    useProductList();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  return (
    <SafeAreaView>
      <View>
        <FlatList
          numColumns={2}
          ListHeaderComponent={
            <>
              <ProductCategory navigation={navigation} />
              <Text style={isDarkMode ? styles.headTectDark : styles.headTect}>
                Product List
              </Text>
            </>
          }
          columnWrapperStyle={styles.row}
          data={data?.pages?.flat()}
          keyExtractor={(item, index) => item.id.toString() + index}
          renderItem={({item}) => (
            <ProductItem navigation={navigation} data={item} />
          )}
          onEndReached={loadMore}
          onEndReachedThreshold={0.3}
          ListFooterComponent={
            isFetchingNextPage ? (
              <View style={styles.footer}>
                <ActivityIndicator size={50} color={'tomato'} />
              </View>
            ) : null
          }
          horizontal={false}
          contentContainerStyle={{paddingBottom: 400}} // Padding untuk bagian bawah
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  footer: {
    padding: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
  },
  headTect: {
    paddingHorizontal: 5,
    fontSize: 13,
    color: 'black',
    paddingVertical: 10,
  },
  headTectDark: {
    paddingHorizontal: 5,
    fontSize: 13,
    color: 'white',
    paddingVertical: 10,
  },
  productItem: {},
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
