import {SecurityRepository, StoreRepository} from '../adapters/repositories';
import {IInfrastructures} from './interfaces/iInfrastructures';
import {IRepositories} from './interfaces/iRepositories';

export const repositories = (
  infrastructure: IInfrastructures,
): IRepositories => {
  return {
    store: new StoreRepository(infrastructure.http),
    security: new SecurityRepository(infrastructure.http),
  };
};
