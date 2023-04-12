import {useAtom} from 'jotai';
import {atomWithAsyncStorage} from '../../services';
import {IProductEntity, IUserEntity} from '../../domain';

export type DashboardStoragetype = {
  theme: boolean | null;
};
export type SessionStorageType = {
  token: string;
  user: IUserEntity;
};
export type CartStoragetype = {
  products: IProductEntity[];
};
const sessionInformation = atomWithAsyncStorage<
  SessionStorageType,
  SessionStorageType
>('SESSION', {
  token: '',
  user: undefined,
});

const dashboardInformation = atomWithAsyncStorage<
  DashboardStoragetype,
  DashboardStoragetype
>('DASHBOARD', {
  theme: null,
});

const cartInformation = atomWithAsyncStorage<CartStoragetype, CartStoragetype>(
  'CART',
  {
    products: [],
  },
);

export const useSession = () => {
  return useAtom(sessionInformation);
};

export const useDashoard = () => {
  return useAtom(dashboardInformation);
};
export const useCart = () => {
  return useAtom(cartInformation);
};
