import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {CartButton, CartItem, Header} from '../../components';
import {useSelector} from 'react-redux';

const Cart = () => {
  const cartRedux = useSelector(state => state.cart);

  return (
    <View style={styles.page}>
      <Header title={'Cart'} />
      <ScrollView style={styles.scrollview}>
        {Array.isArray(cartRedux.listCart) &&
          cartRedux.listCart.map((item, index) => {
            return (
              <View key={index} style={styles.separator}>
                <CartItem
                  id={item.id}
                  img={item.gambar}
                  title={item.nama_barang}
                  price={item.harga}
                  qty={item.qty}
                />
              </View>
            );
          })}
        <View style={styles.gap}></View>
      </ScrollView>
      <View style={styles.btnWrapper}>
        <CartButton
          totalPrice={cartRedux.listCart.reduce(
            (previousValue, currentValue) => previousValue + (currentValue.qty * currentValue.harga),
            0,
          )}
        />
      </View>
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
  btnWrapper: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
});
