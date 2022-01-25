import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header} from '../../components';

const Home = () => {
  return (
    <View style={styles.page}>
      <Header title={'Home'} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
  },
});
