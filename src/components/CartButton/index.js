import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import ModalSuccess from '../ModalSuccess';
import {useDispatch} from 'react-redux';
import {clearCart} from '../../redux/actions/Cart';

const CartButton = ({totalPrice}) => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const handleCheckout = () => {
    Alert.alert('Checkout your product', 'Are you sure?', [
      {
        text: 'Cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          setModal(true);
        },
      },
    ]);
  };

  const modalCallback = () => {
    dispatch(clearCart());
    setModal(!modal);
  };

  return (
    <>
      <View style={styles.cartButton}>
        <View style={styles.content}>
          <Text style={styles.label}>Total Price</Text>
          <Text style={styles.price}>Rp. {totalPrice}</Text>
        </View>
        <TouchableOpacity style={styles.btn} disabled={totalPrice === 0} onPress={handleCheckout}>
          <Text style={styles.btnText}>Checkout</Text>
        </TouchableOpacity>
      </View>
      <ModalSuccess visible={modal} callback={modalCallback} />
    </>
  );
};

export default CartButton;

const styles = StyleSheet.create({
  cartButton: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#3E69D7',
    borderRadius: 8,
    padding: 12,
  },
  content: {
    flex: 1,
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  btn: {
    justifyContent: 'center',
    alignSelf: 'center',
    height: 33,
    backgroundColor: '#FFC107',
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
