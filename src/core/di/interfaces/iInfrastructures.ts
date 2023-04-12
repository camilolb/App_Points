import {IHttp, IStorage} from '../../adapters/infrastructures/interfaces';

export interface IInfrastructures {
  http: IHttp;
  storage: IStorage;
}
