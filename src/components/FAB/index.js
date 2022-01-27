import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Assets from '../../assets';
import {useNavigation} from '@react-navigation/native';

const FAB = ({type = 'banner'}) => {
  const navigation = useNavigation();

  const handleNavigate = () => {
    if (type === 'banner') {
      navigation.navigate('SettingBannerAdd');
    }
  };

  return (
    <TouchableOpacity style={styles.fab} onPress={handleNavigate}>
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
