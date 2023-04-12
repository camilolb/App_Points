import {BaseEntity} from '../../../shared';
import {IProductEntity, IProductEntityData} from '../interfaces/iProduct';

export class Product
  extends BaseEntity<IProductEntity>
  implements IProductEntity
{
  private _Id: string;
  private _Product: string;
  private _Points: number;
  private _Image: string;
  private _CreatedAt: string;
  private _IsRedemption: boolean;

  constructor(request: IProductEntityData) {
    super();
    this._Id = request.id;
    this._Product = request.product;
    this._Points = request.points;
    this._Image = request.image;
    this._CreatedAt = request.createdAt;
    this._IsRedemption = request.is_redemption;
  }
  get Id(): string {
    return this._Id;
  }
  get Product(): string {
    return this._Product;
  }
  get Points(): number {
    return this._Points;
  }

  get Image(): string {
    return this._Image;
  }
  get CreatedAt(): string {
    return this._CreatedAt;
  }
  get IsRedemption(): boolean {
    return this._IsRedemption;
  }
}
