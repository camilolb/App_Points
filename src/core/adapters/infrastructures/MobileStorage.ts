import {IStorage} from './interfaces';
import {MMKV} from 'react-native-mmkv';

export class MobileStorage implements IStorage {
  storage: MMKV;

  constructor(storageInstance: MMKV) {
    this.storage = storageInstance;
  }

  getItem(name: string): string | null {
    const item = this.storage.getString(name);
    if (item != null) {
      return item;
    }
    return null;
  }

  setItem(name: string, value: string): void {
    return this.storage.set(name, value);
  }

  remove(name: string): void {
    return this.storage.delete(name);
  }
}
