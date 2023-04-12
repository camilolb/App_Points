import {
  combineReducers,
  legacy_createStore as createStore,
} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import {harmonyPersistConfig} from './configs/redux-persist';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {DefaultSagaAction} from './configs/sagas.response';

/**
 * Combine all reducers
 */
const appReducer = combineReducers({
  harmony: persistReducer(harmonyPersistConfig),
});

/**
 * Type of Root reducers
 */
export type RootState = ReturnType<typeof appReducer>;

export const configureStore = () => {
  const rootReducer: any = (
    state: RootState,
    action: DefaultSagaAction<any>,
  ): any => {
    return appReducer(state, action);
  };

  const store = createStore(rootReducer);
  const persistItem = persistStore(store);
  return {store, persistItem};
};

export const {store, persistItem} = configureStore();
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
