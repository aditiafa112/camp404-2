import axios from 'axios';
import {Alert} from 'react-native';
import {getData} from '../../utils/AsyncStorage';

const apiGetListMaterial = async () => {
  try {
    const token = await getData('access_token');
    const response = await axios({
      method: 'get',
      url: 'http://api-test2.camp404.com/public/api/material',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.materials;
  } catch (error) {
    Alert.alert('Get list material failed');
  }
};

const apiPostMaterial = async (nama_barang, deskripsi, harga, gambar) => {
  try {
    const token = await getData('access_token');
    const response = await axios({
      method: 'post',
      url: 'http://api-test2.camp404.com/public/api/material',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        nama_barang: nama_barang,
        deskripsi: deskripsi,
        harga: harga,
        gambar: gambar,
      },
    });

    return response.data.material;
  } catch (error) {
    Alert.alert('Post material failed');
  }
};

const apiPatchMaterial = async (id, nama_barang, deskripsi, harga, gambar) => {
  try {
    const token = await getData('access_token');
    const response = await axios({
      method: 'patch',
      url: 'http://api-test2.camp404.com/public/api/material/' + id,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        nama_barang: nama_barang,
        deskripsi: deskripsi,
        harga: harga,
        gambar: gambar,
      },
    });

    return response.data.material;
  } catch (error) {
    Alert.alert('Post material failed');
  }
};

const apiDeleteMaterial = async id => {
  try {
    const token = await getData('access_token');
    const response = await axios({
      method: 'delete',
      url: 'http://api-test2.camp404.com/public/api/material/' + id,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.message;
  } catch (error) {
    Alert.alert('Delete material failed');
  }
};

export {
  apiGetListMaterial,
  apiPostMaterial,
  apiPatchMaterial,
  apiDeleteMaterial,
};
