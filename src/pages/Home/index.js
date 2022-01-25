import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Carousel, Header} from '../../components';

const imgDummy = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
  },
];

const Home = () => {
  return (
    <View style={styles.page}>
      <Header title={'Home'} />
      <Carousel list={imgDummy} />
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
