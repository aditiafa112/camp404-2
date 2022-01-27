import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Header} from '../../components';
import Assets from '../../assets';

const Setting = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title={'Home'} />
      <View style={styles.setting}>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('SettingBanner')}>
          <Text style={styles.itemText}>Setting Banner</Text>
          <Image source={Assets.ICRightArrow} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('SettingProduct')}>
          <Text style={styles.itemText}>Setting Product</Text>
          <Image source={Assets.ICRightArrow} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.btn}>
        <Text style={styles.btnText}>Logout</Text>
      </View>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
  },
  btn: {
    backgroundColor: '#DC3545',
    borderRadius: 8,
    paddingVertical: 13,
    marginHorizontal: 16,
    marginVertical: 16,
    alignItems: 'center',
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  setting: {
    flex: 1,
    paddingHorizontal: 16,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderColor: '#F2F2F2',
    marginTop: 12,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2F2E41',
  },
  icon: {
    width: 16,
    height: 16,
  },
});
