import {IProductEntity, IProductEntityData, Product} from '../../domain';
import {IHttp} from '../infrastructures/interfaces';
import {IStoreRepository} from './interfaces';
import {API_URL} from '@env';

export class StoreRepository implements IStoreRepository {
  constructor(readonly http: IHttp) {}

  getProducts(): Promise<IProductEntity[]> {
    return this.http
      .request<IProductEntityData[]>({
        method: 'get',
        headers: {},
        url: `${API_URL}/products`,
      })
      .then(res => res)
      .then(res => {
        return res.map(item => new Product(item));
      });
  }

  getProduct(id: string): Promise<IProductEntity> {
    return this.http
      .request<IProductEntityData>({
        method: 'get',
        url: `${API_URL}/products/${id}`,
      })
      .then(res => new Product(res));
  }
}
