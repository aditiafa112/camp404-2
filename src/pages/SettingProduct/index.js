import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {FAB, Header, SettingCard} from '../../components';
import {apiGetListMaterial, apiDeleteMaterial} from '../../api/Material';
import {useFocusEffect} from '@react-navigation/native';

const SettingProduct = () => {
  const [product, setProduct] = React.useState([]);

  const getInitialValue = async () => {
    const newProduct = await apiGetListMaterial();
    setProduct(newProduct);
  };

  useFocusEffect(
    React.useCallback(() => {
      getInitialValue();
    }, [])
  );

  const deleteSelectedProduct = async id => {
    const removeProduct = await apiDeleteMaterial(id);
    if(removeProduct){
      getInitialValue();
    }
  };
  
  return (
    <View style={styles.page}>
      <Header title={'Setting Product'} />
      <ScrollView style={styles.scrollView}>
        {Array.isArray(product) &&
          product.map((item, index) => {
            return (
              <View key={index} style={styles.separator}>
                <SettingCard
                  type={'product'}
                  id={item.id}
                  img={item.gambar}
                  desc={item.deskripsi}
                  price={item.harga}
                  title={item.nama_barang}
                  onPressDelete={() => deleteSelectedProduct(item.id)}
                />
              </View>
            );
          })}
        <View style={styles.gap} />
      </ScrollView>
      <View style={styles.fabWrapper}>
        <FAB type='product' />
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
