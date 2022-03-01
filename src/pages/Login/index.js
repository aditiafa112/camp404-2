import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Assets from '../../assets';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.page}>
      <Image source={Assets.ICLogo} style={styles.logo} />
      <Text style={styles.logoText}>Camp404 store</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          secureTextEntry
          placeholder="Password"
        />
        <TouchableOpacity
          style={styles.btnLogin}
          onPress={() => navigation.navigate('MainTab')}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
      </View>
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
  form: {
    marginHorizontal: 16,
    width: '100%',
    paddingHorizontal: 16,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  btnLogin: {
    backgroundColor: '#25AE88',
    borderRadius: 8,
    paddingVertical: 13,
    alignItems: 'center',
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
