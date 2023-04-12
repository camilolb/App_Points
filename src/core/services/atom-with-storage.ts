import {atom, WritableAtom} from 'jotai';
import {storage} from '../di/infrastructures';

export function atomWithAsyncStorage<T, T2>(
  key: any,
  initialValue: any,
): WritableAtom<T, T2> {
  const baseAtom = atom(initialValue);
  baseAtom.onMount = setValue => {
    (() => {
      const item = storage.getString(key);
      if (item != null) {
        setValue(JSON.parse(item));
      }
    })();
  };
  return atom<T, T2>(
    get => get(baseAtom),
    (get, set, update) => {
      const nextValue =
        typeof update === 'function' ? update(get(baseAtom)) : update;
      set(baseAtom, nextValue);
      storage.set(key, JSON.stringify(nextValue));
    },
  );
}
