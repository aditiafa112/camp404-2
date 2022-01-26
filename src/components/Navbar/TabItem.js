import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import Assets from '../../assets';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Home') {
      return Assets.ICHome;
    }
    if (title === 'Cart') {
      return Assets.ICCart;
    }
    if (title === 'Setting') {
      return Assets.ICSetting;
    }
    return Assets.ICHome;
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Image source={Icon()} style={styles.icon(active)} />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  icon: active => ({
    width: 24,
    height: 24,
    tintColor: active ? '#F4A896' : '#fff',
  }),
  text: active => ({
    fontSize: 10,
    color: active ? '#F4A896' : '#fff',
    marginTop: 4,
  }),
});
