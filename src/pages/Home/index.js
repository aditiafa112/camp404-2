import React from 'react';
import {FlatList, StyleSheet, View, Text, ToastAndroid, RefreshControl} from 'react-native';
import {Card, Carousel, Header} from '../../components';
import {apiGetListBanner} from '../../api/Banner';
import {apiGetListMaterial} from '../../api/Material';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../redux/actions/Cart';

const Home = () => {
  const dispatch = useDispatch();
  const [banner, setBanner] = React.useState([]);
  const [product, setProduct] = React.useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  const getInitialValue = async () => {
    const newBanner = await apiGetListBanner();
    setBanner(newBanner)
    const newProduct = await apiGetListMaterial();
    setProduct(newProduct)
  };

  React.useEffect(() => {
    getInitialValue();
  }, []);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    setBanner([]);
    setProduct([]);
    await getInitialValue();
    setRefreshing(false);
  }, []);


  return (
    <View style={styles.page}>
      <Header title={'Home'} />
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        ListHeaderComponent={() => {
          return (
            <>
              {banner.length > 0 && <Carousel list={banner} />}
              {product.length > 0 && <Text style={styles.listProduct}>List Product</Text>}
            </>
          );
        }}
        ListFooterComponent={() => {
          return  <View style={styles.separator} />
        }}
        data={product}
        renderItem={({item}) => {
          return (
            <Card
              id={item.id}
              img={item.gambar}
              title={item.nama_barang}
              desc={item.deskripsi}
              price={item.harga}
              onPressAdd={() => {
                dispatch(addToCart(item));
                ToastAndroid.show(
                  `${item.nama_barang} Ditambahkan ke keranjang`,
                  ToastAndroid.BOTTOM,
                  ToastAndroid.SHORT,
                );
              }}
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
