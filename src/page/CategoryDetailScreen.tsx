import React, {FC} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ProductItem from '../component/ProductItem';
import {SafeAreaView} from 'react-native-safe-area-context';
import useProductListCategory from '../api/useProductListCategory';
import SearchProduct from '../component/SearchProduct';

interface CategoryDetailScreenProps {
  navigation?: any;
  route?: {
    params: {
      type: string | null;
    };
  };
}

const CategoryDetailScreen: FC<CategoryDetailScreenProps> = data => {
  const dataDetail = data.route?.params.type || '';
  const {
    data: productData,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useProductListCategory(dataDetail);

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.containerHeader}>
        <SearchProduct navigation={data.navigation} />
      </View>

      <View style={styles.container}>
        {dataDetail ? (
          <>
            {isLoading ? (
              <ActivityIndicator size="large" color="red" />
            ) : (
              <FlatList
                numColumns={2}
                columnWrapperStyle={styles.row}
                data={productData?.pages.flat() || []} // Flatten pages to get all products
                renderItem={({item}) => (
                  <ProductItem navigation={data.navigation} data={item} />
                )}
                keyExtractor={item => item.id.toString()}
                onEndReached={loadMore}
                onEndReachedThreshold={0.5}
              />
            )}
          </>
        ) : (
          <Text>Ketik Pencarian untuk mencari produk impian anda</Text>
        )}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: 'space-between',
  },
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

export default CategoryDetailScreen;
