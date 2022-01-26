import {StyleSheet, Text, View, Modal, Pressable, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Assets from '../../assets';

const ModalSuccess = ({visible = false, callback = () => {}}) => {
  const [modalVisible, setModalVisible] = useState(visible);

  useEffect(() => {
    setModalVisible(visible);
  }, [visible]);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
        callback();
      }}>
      <View style={styles.overlay}>
        <View style={styles.modalView}>
          <Image source={Assets.ICCircleSuccess} style={styles.img} />
          <Text style={styles.modalText}>SUCCESS</Text>
          <Pressable
            style={styles.btn}
            onPress={() => {
              setModalVisible(!modalVisible);
              callback();
            }}>
            <Text style={styles.btnText}>OK</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default ModalSuccess;

const styles = StyleSheet.create({
  overlay: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 16,
  },
  modalView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 8,
    paddingVertical: 40,
  },
  img: {
    width: 150,
    height: 150,
    marginBottom: 16,
  },
  modalText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#25AE88',
    marginBottom: 16,
  },
  btn: {
    backgroundColor: '#E5E1E1',
    paddingVertical: 7,
    paddingHorizontal: 39,
    borderRadius: 8,
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
