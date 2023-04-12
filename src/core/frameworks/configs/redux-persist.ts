import AsyncStorage from '@react-native-async-storage/async-storage';

export const harmonyPersistConfig = {
  key: 'persistenRedux',
  storage: AsyncStorage,
  blacklist: [],
};
