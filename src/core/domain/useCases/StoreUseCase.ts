import {IStoreRepository} from '../../adapters/repositories';
import {IProductEntity} from '../interfaces';
import {IStoreUseCase} from './interfaces';

export class StoreUseCase implements IStoreUseCase {
  constructor(readonly storeRepo: IStoreRepository) {}

  async getProducts(): Promise<IProductEntity[]> {
    return await this.storeRepo.getProducts();
  }

  async getProduct(id: string): Promise<IProductEntity> {
    return await this.storeRepo.getProduct(id);
  }
}
