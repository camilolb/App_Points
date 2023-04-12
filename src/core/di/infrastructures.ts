import {Http, MobileStorage} from '../adapters/infrastructures';
import {IInfrastructures} from './interfaces/iInfrastructures';
import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();

export const infrastructures = (): IInfrastructures => {
  return {
    http: new Http(),
    storage: new MobileStorage(storage),
  };
};
