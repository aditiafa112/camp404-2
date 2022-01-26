import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';

const Card = ({id, img, title, desc, price}) => {
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: img,
        }}
        style={styles.img}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
        <Text style={styles.price}>Rp {price},-</Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'row',
    borderColor: '#3E69D7',
    borderWidth: 3,
    borderRadius: 8,
    padding: 12,
  },
  img: {
    width: 140,
    aspectRatio: 1,
    marginRight: 16,
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
  desc: {
    fontSize: 13,
    color: '#3F3D56',
    marginBottom: 8,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#3E69D7',
    marginBottom: 8,
  },
  btn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    width: 62,
    height: 20,
    backgroundColor: '#25AE88',
    borderRadius: 3,
  },
  btnText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
  },
});
