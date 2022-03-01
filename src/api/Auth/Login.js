import {Alert} from 'react-native';

const apiLogin = async (email, password) => {
  try {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    formData.append('password_confirmation', email);

    const response = await fetch(
      'http://api-test2.camp404.com/public/api/login',
      {
        method: 'POST',
        body: formData,
      },
    );
    const res = await response.json();

    if (res?.user && res?.access_token) {
      return res;
    }

    if (res?.message) {
      Alert.alert('Message', res.message);
    }

    if (res?.errors) {
      Alert.alert('Errors', res.errors);
    }

    return false;
  } catch (error) {
    Alert.alert('login failed');
  }
};

export default apiLogin;
