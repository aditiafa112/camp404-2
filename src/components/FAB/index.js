import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Assets from '../../assets';

const FAB = ({type = 'banner'}) => {
  return (
    <TouchableOpacity style={styles.fab}>
      <Image source={Assets.ICFAB} style={styles.img} />
    </TouchableOpacity>
  );
};

export default FAB;

const styles = StyleSheet.create({
  fab: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    backgroundColor: 'blue',
  },
  img: {
    width: 70,
    height: 70,
  },
});
