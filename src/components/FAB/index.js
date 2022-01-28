import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import Assets from '../../assets';

const FAB = ({type = 'banner'}) => {
  const navigation = useNavigation();

  const handleNavigate = () => {
    if (type === 'banner') {
      navigation.navigate('SettingBannerAdd');
    } else if (type === 'product') {
      navigation.navigate('SettingProductAdd');
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
