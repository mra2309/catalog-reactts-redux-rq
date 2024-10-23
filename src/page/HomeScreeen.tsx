import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ProducList from '../component/ProductList';
import SearchProduct from '../component/SearchProduct';
import ThemeToggle from '../component/ThemeSwitch';

export default function HomeScreeen({navigation}: any) {
  return (
    <SafeAreaView>
      <ThemeToggle />
      <View style={styles.containerHeader}>
        <SearchProduct navigation={navigation} />
      </View>
      <View style={styles.container}>
        <ProducList navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textHeader: {
    fontWeight: '500',
    color: 'white',
  },
  flex: {
    flex: 2, // Mengisi seluruh ruang yang tersedia
    justifyContent: 'center', // Atur konten secara vertikal
    alignItems: 'center', // Atur konten secara horizontal
  },
  container: {
    paddingHorizontal: 12,
    paddingTop: 10,
  },
  containerHeader: {
    backgroundColor: 'red',
    color: 'white',
    paddingHorizontal: 20,
    // paddingTop: 10,
  },
});
