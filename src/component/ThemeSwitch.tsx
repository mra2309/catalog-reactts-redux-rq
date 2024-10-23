import React from 'react';
import {Switch, View, Text, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {switchTheme} from '../reducers/themeSlice';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: any) => state.theme.dark);
  console.log(isDarkMode);

  const toggleSwitch = () => {
    dispatch(switchTheme());
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.text, {color: isDarkMode ? 'white' : 'black'}]}>
        {isDarkMode ? 'Dark Mode' : 'Light Mode'}
      </Text>
      <Switch
        value={isDarkMode}
        onValueChange={toggleSwitch}
        thumbColor={isDarkMode ? 'white' : 'black'}
        trackColor={{false: '#767577', true: '#81b0ff'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  text: {
    fontSize: 13,
    marginRight: 10,
  },
});

export default ThemeToggle;
