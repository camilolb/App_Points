export interface IProductEntity {
  Id: string;
  Product: string;
  Points: number;
  Image: string;
  CreatedAt: string;
  IsRedemption: boolean;
}
export interface IProductEntityData {
  id: string;
  product: string;
  points: number;
  is_redemption: boolean;
  image: string;
  createdAt: string;
}
