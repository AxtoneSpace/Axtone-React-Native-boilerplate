import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './Redux';
import rootSagas from './Sagas';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whiteList: []
}

const sagaMidleware = createSagaMiddleware();

export default () => {
    const store = createStore(
        persistReducer(persistConfig, rootReducer),
        applyMiddleware(sagaMidleware)
    )
    const persistor = persistStore(store);
    sagaMidleware.run(rootSagas);
    return { store, persistor }
}

