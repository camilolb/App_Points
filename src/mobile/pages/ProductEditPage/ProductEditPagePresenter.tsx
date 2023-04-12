import React from 'react';
import {useLoading, useProduct} from '../../../core/hooks';
import {ProductEditPageComponent} from './ProductEditPageComponent';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PrivateStackParamList} from '../../Navigation';
import {useFocusEffect} from '@react-navigation/native';

type NavigationScreenProps = NativeStackScreenProps<
  PrivateStackParamList,
  'ProductEdit'
>;

type Props = NavigationScreenProps;

export function ProductEditPagePresenter({route, navigation}: Props) {
  const {id} = route.params;
  const {data, isLoading} = useProduct(id);
  const {setLoading} = useLoading();

  const onHandleSubmit = () => {
    navigation.navigate('HomePage');
  };

  useFocusEffect(
    React.useCallback(() => {
      setLoading(isLoading);
    }, [isLoading, setLoading]),
  );

  return (
    <ProductEditPageComponent onHandleSubmit={onHandleSubmit} product={data} />
  );
}
