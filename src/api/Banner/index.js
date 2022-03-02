import axios from 'axios';
import {Alert} from 'react-native';
import {getData} from '../../utils/AsyncStorage';

const apiGetListBanner = async () => {
  try {
    const token = await getData('access_token');
    const response = await axios({
      method: 'get',
      url: 'http://api-test2.camp404.com/public/api/banner',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.banners
  } catch (error) {
    Alert.alert('Get list banner failed');
  }
};

const apiPostBanner = async (title, photo) => {
  try {
    const token = await getData('access_token');
    const response = await axios({
      method: 'post',
      url: 'http://api-test2.camp404.com/public/api/banner',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        title: title,
        photo: photo,
      },
    });

    return response.data.banner;
  } catch (error) {
    Alert.alert('Post banner failed');
  }
};

const apiDeleteBanner = async id => {
  try {
    const token = await getData('access_token');
    const response = await axios({
      method: 'delete',
      url: 'http://api-test2.camp404.com/public/api/banner/' + id,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.message;
  } catch (error) {
    Alert.alert('Delete banner failed');
  }
};

export {apiGetListBanner, apiPostBanner, apiDeleteBanner};
