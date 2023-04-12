import {IProductEntity} from '../../interfaces';

export interface IStoreUseCase {
  getProducts(): Promise<IProductEntity[]>;
  getProduct(id: string): Promise<IProductEntity>;
}
