import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import useProductCategory from '../api/useProductCategory';
import {useSelector} from 'react-redux';

export default function ProductCategory({navigation}: any) {
  const {data: categories, error, isLoading} = useProductCategory();
  const isDarkMode = useSelector((state: any) => state.theme.dark);
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error fetching categories</Text>;
  }

  return (
    <View>
      <Text style={isDarkMode ? styles.headTectDark : styles.headTect}>
        Category Product
      </Text>
      <View style={styles.container}>
        <FlatList
          data={categories}
          keyExtractor={item => item.slug}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.categoryItem}
              onPress={() =>
                navigation.push('DetailCategory', {type: item.name})
              }>
              <View style={styles.circle} />
              <Text style={styles.categoryText} numberOfLines={1}>
                {item.name.split(' ')[0]}
              </Text>
            </TouchableOpacity>
          )}
          horizontal={true}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 5,
  },
  headTect: {
    fontSize: 13,
    color: 'black',
    paddingVertical: 10,
  },
  headTectDark: {
    fontSize: 13,
    color: 'white',
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
    color: 'black',
    fontSize: 10,
  },
});
