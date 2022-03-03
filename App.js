import React from 'react';
import Router from './src/router';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router />
      </Provider>
    </>
  );
};

export default App;
