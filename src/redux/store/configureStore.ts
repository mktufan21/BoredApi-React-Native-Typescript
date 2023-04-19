import {AnyAction, combineReducers, configureStore} from '@reduxjs/toolkit';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk';
import appInfoReducer from '../reducer/appInfoReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const rootReducer = combineReducers({
  appState: appInfoReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunkMiddleware],
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;


export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;
export default store;
