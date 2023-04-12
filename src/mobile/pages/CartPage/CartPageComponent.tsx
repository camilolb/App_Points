import React from 'react';

import {FlatList} from 'react-native';
import {Header} from '../../mobile-ui';
import styles from './CartPage.styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IProductEntity} from '../../../core/domain';
import {CartPage, ProductInformationItem} from '../../../shared';
type Props = {
  onHandleEdit: (product?: IProductEntity) => void;
  productList: IProductEntity[];
  onHandleSubmit: () => void;
};

export function CartPageComponent({productList, onHandleEdit}: Props) {
  return (
    <>
      <Header
        options={{
          title: 'Products',
          blackHeader: true,
          borderBottom: true,
        }}
      />

      <SafeAreaView edges={['bottom']} style={styles.safeAreaContainer}>
        <FlatList
          contentContainerStyle={styles.scrollViewContainer}
          data={productList || []}
          renderItem={({item}) => (
            <ProductInformationItem
              data={item}
              // quantity={item.Quantity}
              onPress={onHandleEdit}
            />
          )}
        />
      </SafeAreaView>
    </>
  );
}
