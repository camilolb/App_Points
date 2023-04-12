import {BaseEntity} from '../../../shared';
import {ICartEntity, ICartEntityData, IProductEntity} from '../interfaces';

export class Cart extends BaseEntity<ICartEntity> implements ICartEntity {
  private _Product: IProductEntity;
  private _Quantity: number;

  constructor(request: ICartEntityData) {
    super();
    this._Product = request?.product;
    this._Quantity = request?.quantity;
  }

  get Product(): IProductEntity {
    return this._Product;
  }
  get Quantity(): number {
    return this._Quantity;
  }
}
