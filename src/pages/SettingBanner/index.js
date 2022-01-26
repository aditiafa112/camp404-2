import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header} from '../../components';

const SettingBanner = () => {
  return (
    <View style={styles.page}>
      <Header title={'Setting Banner'} />
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
});
