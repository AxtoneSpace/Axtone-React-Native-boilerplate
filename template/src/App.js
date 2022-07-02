import React, {useEffect} from 'react'
import storeConfig from './Store'
import { Provider } from 'react-redux'
import AppNavigations from './Navigations/AppNavigations';
import {PersistGate} from 'redux-persist/integration/react';

const {store, persistor} = storeConfig();

const App = () => {
  useEffect(() => {
    if (__DEV__) {
      import('./Config/ReactotronConfig').then(() =>
        console.log('Reactotron Configured 🔥'),
      );
    }
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigations />
      </PersistGate>
    </Provider>
  )
}

export default App