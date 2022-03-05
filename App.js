import React from 'react';
import Router from './src/router';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import messaging from '@react-native-firebase/messaging';
import {Alert} from 'react-native';

const App = () => {
  React.useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert(remoteMessage?.notification?.title, remoteMessage?.notification?.body);
    });

    return unsubscribe;
  }, []);

  return (
    <>
      <Provider store={store}>
        <Router />
      </Provider>
    </>
  );
};

export default App;
