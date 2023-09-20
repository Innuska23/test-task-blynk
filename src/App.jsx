import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from './redux/store.js';

import { Dayry } from './components/Dayry';
import "./index.css"

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Dayry />
      </PersistGate>
    </Provider>
  );
};

export default App;
