import {
  ISecurityRepository,
  IStoreRepository,
} from '../../adapters/repositories';

export interface IRepositories {
  store: IStoreRepository;
  security: ISecurityRepository;
}
