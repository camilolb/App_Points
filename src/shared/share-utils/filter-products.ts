import {IProductEntity} from '../../core/domain';

export function filterListProducts(
  products?: IProductEntity[],
  showRedeemed?: boolean,
): IProductEntity[] {
  if (showRedeemed) {
    return products?.filter(product => product.IsRedemption) || [];
  } else if (showRedeemed === false) {
    return products?.filter(product => !product.IsRedemption) || [];
  } else {
    return products || [];
  }
}
