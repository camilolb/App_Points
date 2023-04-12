import {
  ISecurityUseCase,
  IStoreUseCase,
} from '../../domain/useCases/interfaces';

export interface IUseCases {
  storeUseCase: IStoreUseCase;
  securityUseCase: ISecurityUseCase;
}
