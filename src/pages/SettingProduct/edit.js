import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Assets from '../../assets';
import {Header} from '../../components';
import {launchImageLibrary} from 'react-native-image-picker';
import ModalSuccess from '../../components/ModalSuccess';
import {apiPatchMaterial} from '../../api/Material';

const SettingProductEdit = ({navigation, route}) => {
  const [name, setName] = useState(route.params.title);
  const [desc, setDesc] = useState(route.params.desc);
  const [price, setPrice] = useState(route.params.price.toString());
  const [image, setImage] = useState('');
  const [modal, setModal] = useState(false);

  const handleImage = async () => {
    await launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: true,
        quality: 0.8,
        maxWidth: 500,
        maxHeight: 250,
      },
      response => {
        if (response.didCancel || response.error) {
          Alert.alert('oops, batal memilih foto.');
        } else {
          if (response?.assets[0]?.fileSize < 500000) {
            setImage(response);
          } else {
            Alert.alert('Ukuran gambar tidak boleh lebih dari 500kb');
          }
        }
      },
    );
  };

  const handleUpdate = () => {
    if (name === '' || desc === '' || price === '') {
      Alert.alert('Peringatan', 'Data tidak boleh kosong!!!');
      return;
    }
    Alert.alert('update your product', 'Are you sure?', [
      {
        text: 'Cancel',
      },
      {
        text: 'OK',
        onPress: async () => {
          const newImage = Array.isArray(image?.assets)
            ?  `data:${image?.assets[0]?.type};base64,${image?.assets[0]?.base64}`
            : route.params.img;

          const saveProduct = await apiPatchMaterial(
            route.params.id,
            name,
            desc,
            price,
            newImage,
          );
          if (saveProduct) {
            setModal(true);
          }
        },
      },
    ]);
  };

  const modalCallback = () => {
    setModal(!modal);
    navigation.goBack();
  };

  return (
    <View style={styles.page}>
      <Header title={'Edit Product'} />
      <View style={styles.gap} />
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Product Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Product Name"
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={styles.textArea}
          value={desc}
          onChangeText={setDesc}
          placeholder="Description"
          multiline
          numberOfLines={4}
          textAlignVertical="top"
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Price</Text>
        <TextInput
          style={styles.input}
          value={price}
          onChangeText={setPrice}
          placeholder="Price"
          keyboardType="decimal-pad"
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Photos</Text>
        {image?.assets || route.params ? (
          <TouchableOpacity
            onPress={handleImage}
            style={styles.previewImageWrapper}>
            <Image
              source={{
                uri: Array.isArray(image?.assets)
                  ? image?.assets[0].uri
                  : route.params.img,
              }}
              resizeMode={'cover'}
              style={styles.previewImage}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.iconWrapper} onPress={handleImage}>
            <Image source={Assets.ICPlush} style={styles.icon} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.inputGroup}>
        <TouchableOpacity style={styles.btn} onPress={handleUpdate}>
          <Text style={styles.btnText}>Update</Text>
        </TouchableOpacity>
      </View>
      <ModalSuccess visible={modal} callback={modalCallback} />
    </View>
  );
};

export default SettingProductEdit;

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
  },
  gap: {
    height: 16,
  },
  inputGroup: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2F2E41',
    marginBottom: 8,
  },
  input: {
    borderColor: '#C4C4C4',
    borderRadius: 6,
    borderWidth: 1,
    height: 40,
    paddingHorizontal: 12,
  },
  textArea: {
    borderColor: '#C4C4C4',
    borderRadius: 6,
    borderWidth: 1,
    paddingHorizontal: 12,
  },
  iconWrapper: {
    backgroundColor: '#C4C4C4',
    borderRadius: 6,
    padding: 30,
    width: 100,
  },
  icon: {
    width: 40,
    height: 40,
  },
  previewImageWrapper: {
    width: 125,
    height: 125,
  },
  previewImage: {
    width: 125,
    height: 125,
  },
  btn: {
    backgroundColor: '#3E69D7',
    height: 45,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
