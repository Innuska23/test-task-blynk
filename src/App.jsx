import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from './redux/store.js';


export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      </PersistGate>
    </Provider>
  );
};

export default App;
