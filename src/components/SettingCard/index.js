import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const SettingCard = ({type = 'banner', id, img, title, desc, price}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.settingCard}>
      <Image source={{uri: img}} style={styles.img(type)} resizeMode="cover" />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.actionGroup}>
          {type === 'product' && (
            <TouchableOpacity
              style={[styles.btn, styles.btnEdit]}
              onPress={() =>
                navigation.navigate('SettingProductEdit', {
                  id,
                  img,
                  title,
                  desc,
                  price,
                })
              }>
              <Text style={styles.btnText}>Edit</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity style={[styles.btn, styles.btnDelete]}>
            <Text style={styles.btnText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SettingCard;

const styles = StyleSheet.create({
  settingCard: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 3,
    borderColor: '#3E69D7',
    borderRadius: 8,
    padding: 12,
  },
  img: type => ({
    width: type === 'banner' ? 140 : 70,
    height: 70,
    borderRadius: 8,
    marginRight: 16,
  }),
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2F2E41',
    marginBottom: 16,
  },
  actionGroup: {
    flexDirection: 'row',
  },
  btn: {
    width: 60,
    paddingVertical: 3,
    borderRadius: 3,
    alignItems: 'center',
    marginRight: 16,
  },
  btnEdit: {
    backgroundColor: '#FFC107',
  },
  btnDelete: {
    backgroundColor: '#DC3545',
  },
  btnText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
  },
});
