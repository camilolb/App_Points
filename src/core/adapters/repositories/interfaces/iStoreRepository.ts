import {IProductEntity} from '../../../domain';

export interface IStoreRepository {
  getProducts(): Promise<IProductEntity[]>;
  getProduct(id: string): Promise<IProductEntity>;
}
