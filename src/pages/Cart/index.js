import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {CartItem, Header} from '../../components';

const productDummy = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
    title: 'Nama Product',
    price: 10000,
    qty: 2,
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
    title: 'Nama Product',
    price: 30000,
    qty: 5,
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
    title: 'Nama Product',
    price: 30000,
    qty: 3,
  },
];

const Cart = () => {
  return (
    <View style={styles.page}>
      <Header title={'Cart'} />
      <ScrollView style={styles.scrollview}>
        {Array.isArray(productDummy) &&
          productDummy.map((item, index) => {
            return (
              <View key={index} style={styles.separator}>
                <CartItem
                  id={item.id}
                  img={item.img}
                  title={item.title}
                  price={item.price}
                  qty={item.qty}
                />
              </View>
            );
          })}

        <View style={styles.gap}></View>
      </ScrollView>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollview: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 100,
  },
  separator: {
    marginBottom: 8,
  },
  gap: {
    height: 100,
  },
});
