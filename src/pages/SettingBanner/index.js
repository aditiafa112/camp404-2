import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Header, SettingCard} from '../../components';

const imgDummy = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
    title: 'Nama Banner',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
    title: 'Nama Banner',
  },
];

const SettingBanner = () => {
  return (
    <View style={styles.page}>
      <Header title={'Setting Banner'} />
      <ScrollView style={styles.scrollView}>
        {Array.isArray(imgDummy) &&
          imgDummy.map((item, index) => {
            return (
              <View key={index} style={styles.separator}>
                <SettingCard id={item.id} img={item.img} title={item.title} />
              </View>
            );
          })}
        <View style={styles.gap} />
      </ScrollView>
    </View>
  );
};

export default SettingBanner;

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  separator: {
    marginBottom: 8,
  },
  gap: {
    height: 30,
  },
});
