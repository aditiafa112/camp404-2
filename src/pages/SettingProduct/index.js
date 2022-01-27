import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {FAB, Header, SettingCard} from '../../components';

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

const SettingProduct = () => {
  return (
    <View style={styles.page}>
      <Header title={'Setting Product'} />
      <ScrollView style={styles.scrollView}>
        {Array.isArray(productDummy) &&
          productDummy.map((item, index) => {
            return (
              <View key={index} style={styles.separator}>
                <SettingCard
                  type={'product'}
                  id={item.id}
                  img={item.img}
                  title={item.title}
                />
              </View>
            );
          })}
        <View style={styles.gap} />
      </ScrollView>
      <View style={styles.fabWrapper}>
        <FAB />
      </View>
    </View>
  );
};

export default SettingProduct;

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  separator: {
    marginBottom: 8,
  },
  gap: {
    height: 30,
  },
  fabWrapper: {
    position: 'absolute',
    bottom: 77,
    right: 31,
  },
});
