import {SecurityUseCase, StoreUseCase} from '../domain';
import {IRepositories} from './interfaces/iRepositories';
import {IUseCases} from './interfaces/iUseCases';

export const appUseCases = (repositories: IRepositories): IUseCases => {
  return {
    storeUseCase: new StoreUseCase(repositories.store),
    securityUseCase: new SecurityUseCase(repositories.security),
  };
};
