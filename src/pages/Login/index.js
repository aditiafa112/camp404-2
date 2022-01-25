import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Assets from '../../assets';

const Login = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Image source={Assets.ICLogo} style={styles.logo} />
      <Text style={styles.logoText}>Camp404 store</Text>
      <TouchableOpacity
        style={styles.btnLogin}
        onPress={() => navigation.navigate('Home')}>
        <Image source={Assets.ICGoogle} style={styles.imgGoogle} />
        <Text style={styles.btnText}>Continue with google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#3E69D7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 199,
    height: 161,
    marginBottom: 30,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F2F2F2',
    marginBottom: 58,
  },
  btnLogin: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    width: '100%',
    maxWidth: 300,
  },
  imgGoogle: {
    width: 36,
    aspectRatio: 1,
    marginHorizontal: 12,
    marginVertical: 6,
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4E4D4D',
  },
});
