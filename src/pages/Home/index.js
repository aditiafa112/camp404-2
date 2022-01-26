import React from 'react';
import {FlatList, StyleSheet, View, Text} from 'react-native';
import {Card, Carousel, Header} from '../../components';

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

const productDummy = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
    title: 'Nama Product',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting ...',
    price: 10000,
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
    title: 'Nama Product',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting ...',
    price: 30000,
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
    title: 'Nama Product',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting ...',
    price: 30000,
  },
];

const Home = () => {
  return (
    <View style={styles.page}>
      <Header title={'Home'} />
      <FlatList
        ListHeaderComponent={() => {
          return (
            <>
              <Carousel list={imgDummy} />
              <Text style={styles.listProduct}>List Product</Text>
            </>
          );
        }}
        ListFooterComponent={() => {
          return  <View style={styles.separator} />
        }}
        data={productDummy}
        renderItem={({item}) => {
          return (
            <Card
              id={item.id}
              img={item.img}
              title={item.title}
              desc={item.desc}
              price={item.price}
            />
          );
        }}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => {
          return <View style={styles.separator} />;
        }}
        style={styles.productList}
      />
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
  productList: {
    paddingHorizontal: 16,
  },
  separator: {
    height: 16,
  },
  listProduct: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2F2E41',
    marginBottom: 16,
  },
});
