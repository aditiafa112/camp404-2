import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Assets from '../../assets';

const CartItem = ({id, img, title, price, qty}) => {
  return (
    <View style={styles.cartItem}>
      <Image
        source={{
          uri: img,
        }}
        style={styles.img}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>Rp {price},-</Text>
        <View style={styles.actionGroup}>
          <TouchableOpacity>
            <Image
              source={Assets.ICTrash}
              style={[styles.icon, styles.iconTrash]}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={Assets.ICCircleMinus} style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.qty}>{qty}</Text>
          <TouchableOpacity>
            <Image source={Assets.ICCirclePlus} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  cartItem: {
    display: 'flex',
    flexDirection: 'row',
    borderColor: '#3E69D7',
    borderWidth: 3,
    borderRadius: 8,
    padding: 12,
  },
  img: {
    width: 70,
    aspectRatio: 1,
    marginRight: 12,
    borderRadius: 8,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2F2E41',
    marginBottom: 8,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#3E69D7',
    marginBottom: 8,
  },
  actionGroup: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  icon: {
    height: 24,
    width: 24,
  },
  iconTrash: {
    marginRight: 29,
  },
  qty: {
    width: 32,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});
