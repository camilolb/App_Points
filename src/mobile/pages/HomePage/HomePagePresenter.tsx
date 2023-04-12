import React, {useState} from 'react';
import {useLoading, useStore} from '../../../core/hooks';
import {HomePageComponent} from './HomePageComponent';
import {IProductEntity} from '../../../core/domain';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PrivateStackParamList} from '../../Navigation';
import {useFocusEffect} from '@react-navigation/native';
import {filterListProducts, sumRedemptionPoints} from '../../../shared';

type NavigationScreenProps = NativeStackScreenProps<PrivateStackParamList>;
type Props = NavigationScreenProps;

export function HomePagePresenter({navigation}: Props) {
  const {data, isLoading} = useStore();
  const {setLoading} = useLoading();
  const [showRedeemedProducts, setShowRedeemedProducts] = useState<
    boolean | undefined
  >(undefined);

  const onHandleEdit = (product?: IProductEntity) => {
    navigation.navigate('ProductEdit', {
      id: product?.Id,
    });
  };

  const onHandleFilterProducts = (showRedeemed?: boolean) => {
    setShowRedeemedProducts(showRedeemed);
  };

  useFocusEffect(
    React.useCallback(() => {
      setLoading(isLoading);
    }, [isLoading, setLoading]),
  );

  return (
    <HomePageComponent
      productList={filterListProducts(data, showRedeemedProducts)}
      onHandleEdit={onHandleEdit}
      sumRedemptionPoints={sumRedemptionPoints(data)}
      onHandleFilterProducts={onHandleFilterProducts}
      showRedeemedProducts={showRedeemedProducts}
    />
  );
}
