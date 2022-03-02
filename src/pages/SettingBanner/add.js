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
import {apiPostBanner} from '../../api/Banner';

const SettingBannerAdd = ({navigation}) => {
  const [name, setName] = useState('');
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

  const handleSave = () => {
    if (name === '' || image === '') {
      Alert.alert('Peringatan', 'Data tidak boleh kosong!!!');
      return;
    }
    Alert.alert('Save your banner', 'Are you sure?', [
      {
        text: 'Cancel',
      },
      {
        text: 'OK',
        onPress: async () => {
          const saveBanner = await apiPostBanner(
            name,
            `data:${image?.assets[0]?.type};base64,${image?.assets[0]?.base64}`,
          );
          if(saveBanner){
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
      <Header title={'Add Banner'} />
      <View style={styles.gap} />
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Banner Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Banner Name"
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Photos</Text>
        {image?.assets ? (
          <TouchableOpacity
            onPress={handleImage}
            style={styles.previewImageWrapper}>
            <Image
              source={{uri: image?.assets[0].uri}}
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
        <TouchableOpacity style={styles.btn} onPress={handleSave}>
          <Text style={styles.btnText}>Save</Text>
        </TouchableOpacity>
      </View>
      <ModalSuccess visible={modal} callback={modalCallback} />
    </View>
  );
};

export default SettingBannerAdd;

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
    width: 250,
    height: 125,
  },
  previewImage: {
    width: 250,
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
