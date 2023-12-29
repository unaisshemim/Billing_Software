import React from 'react';

import BottomTab from './src/components/BottomTab/BottomTab';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
const App = () => {
  return (
    <Provider store={store}>
      <BottomTab />
    </Provider>
  );
};

export default App;
