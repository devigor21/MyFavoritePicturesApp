import * as React from 'react';
import type {Node} from 'react';
import Navigate from './navigation/Navigate';
import {Provider} from 'react-redux';
import store from './store';

export const App: () => Node = () => {
  return (
    <Provider store={store}>
      <Navigate />
    </Provider>
  );
};

export default App;
