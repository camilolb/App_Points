import {IProductEntity} from '../../core/domain';
import numeral from 'numeral';

export function sumRedemptionPoints(products?: IProductEntity[]): string {
  let totalPoints = 0;

  products?.forEach(product => {
    if (product.IsRedemption) {
      totalPoints += product.Points;
    }
  });
  return numeral(totalPoints).format('0,0.00');
}
