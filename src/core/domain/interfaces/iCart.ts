import {IProductEntity} from './iProduct';

export interface ICartEntity {
  Product: IProductEntity;
  Quantity: number;
}
export interface ICartEntityData {
  product: IProductEntity;
  quantity: number;
}
