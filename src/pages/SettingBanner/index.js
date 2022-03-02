import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {FAB, Header, SettingCard} from '../../components';
import {apiGetListBanner} from '../../api/Banner';
import { useFocusEffect } from '@react-navigation/native';

const SettingBanner = () => {
  const [banner, setBanner] = React.useState([]);

  const getInitialValue = async () => {
    const newBanner = await apiGetListBanner();
    setBanner(newBanner);
  };

  useFocusEffect(
    React.useCallback(() => {
      getInitialValue();
    }, [])
  );

  return (
    <View style={styles.page}>
      <Header title={'Setting Banner'} />
      <ScrollView style={styles.scrollView}>
        {Array.isArray(banner) &&
          banner.map((item, index) => {
            return (
              <View key={index} style={styles.separator}>
                <SettingCard id={item.id} img={item.photo} title={item.title} />
              </View>
            );
          })}
        <View style={styles.gap} />
      </ScrollView>
      <View style={styles.fabWrapper}>
        <FAB />
      </View>
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
  fabWrapper: {
    position: 'absolute',
    bottom: 77,
    right: 31,
  },
});
