/* eslint-disable react/react-in-jsx-scope */
import React, {FC} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import SearchProductInit from '../component/SearchProductInit';
import {SafeAreaView} from 'react-native-safe-area-context';
import useProductListSearch from '../api/useProductListSearch';
import ProductItem from '../component/ProductItem';

interface SearchProductScreenProps {
  navigation?: any;
}

const SearchProductScreen: FC<SearchProductScreenProps> = ({navigation}) => {
  const [text, setText] = React.useState('');

  const {
    data: productData,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useProductListSearch(text);

  const handleChangeText = (input: string) => {
    setText(input);
  };

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.containerHeader}>
        <SearchProductInit
          navigation={navigation}
          onChangeText={handleChangeText}
          text={text}
        />
      </View>

      <View style={styles.container}>
        {text ? (
          <>
            {isLoading ? (
              <ActivityIndicator size="large" color="red" />
            ) : (
              <FlatList
                numColumns={2}
                columnWrapperStyle={styles.row}
                data={productData?.pages.flat() || []} // Flatten pages to get all products
                renderItem={({item}) => (
                  <ProductItem navigation={navigation} data={item} />
                )}
                keyExtractor={item => item.id.toString()}
                onEndReached={loadMore}
                onEndReachedThreshold={0.5}
              />
            )}
          </>
        ) : (
          <Text style={styles.text}>
            Ketik Pencarian untuk mencari produk impian anda
          </Text>
        )}

        {/* <ProducList navigation={navigation} /> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'silver',
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
  },
  productItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
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

export default SearchProductScreen;
