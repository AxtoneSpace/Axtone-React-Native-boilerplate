import React, {useEffect} from 'react';
import storeConfig from './Store';
import {Provider} from 'react-redux';
import AppNavigations from './Navigations/AppNavigations';
import {PersistGate} from 'redux-persist/integration/react';
import {I18nextProvider} from 'react-i18next';
import i18n from './I18n/i18n.config';

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
        <I18nextProvider i18n={i18n}>
          <AppNavigations />
        </I18nextProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
