import React, {useEffect} from 'react';
import {ActivityIndicator, Text, View, StyleSheet} from 'react-native';

const Splash = ({navigation}: any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simpel Mart</Text>
      <Text style={styles.titleSm}>by : adi feri ismail</Text>
      <ActivityIndicator size="large" color="#ffffff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red', // Red background
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleSm: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#ffffff', // White text color
    marginBottom: 20, // Space between title and loading indicator
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff', // White text color
    marginBottom: 20, // Space between title and loading indicator
  },
});

export default Splash;
