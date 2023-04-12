import React from 'react';
import {CartPageComponent} from './CartPageComponent';
import {CartStoragetype, useCart} from '../../../core/frameworks/jotai';
import {IProductEntity} from '../../../core/domain';

export function CartPagePresenter() {
  const [cartInformation] = useCart();
  const {products} = cartInformation as CartStoragetype;

  console.log('cartInformation', cartInformation);

  const onHandleSubmit = () => {
    console.log('TODO');
  };
  const onHandleEdit = (product?: IProductEntity) => {
    console.log('product', product);
  };
  return (
    <CartPageComponent
      onHandleSubmit={onHandleSubmit}
      productList={products || []}
      onHandleEdit={onHandleEdit}
    />
  );
}
