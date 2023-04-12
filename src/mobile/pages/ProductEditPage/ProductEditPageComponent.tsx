import React from 'react';
import {Image, ScrollView, View} from 'react-native';
import {Button, HeaderProduct, Label} from '../../mobile-ui';
import styles from './ProductEditPage.styles';
import {IProductEntity} from '../../../core/domain';
import {DateTime} from 'luxon';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PrivateStackParamList} from '../../Navigation';

interface ProductEditProps {
  onHandleSubmit: (product?: IProductEntity) => void;
  product?: IProductEntity;
}
type Props = ProductEditProps;

export function ProductEditPageComponent({onHandleSubmit, product}: Props) {
  const dateTime = DateTime.fromISO(product?.CreatedAt || '');
  return (
    <>
      <View style={styles.container}>
        <HeaderProduct title={product?.Product} />
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          <>
            <View style={styles.imageContainer}>
              <Image source={{uri: product?.Image}} style={styles.image} />
            </View>
            <View style={styles.productDescriptionContainer}>
              <Label type={'h4'} fontWeight={'bold'} color={'silver'}>
                {'Detalle del producto:'}
              </Label>
              <Label
                type={'h4'}
                fontWeight={'bold'}
                color={'black'}
                style={styles.titleProductDescription}>
                Comprado el {dateTime.toFormat("d 'de' MMMM, yyyy")}
              </Label>

              <Label type={'h4'} fontWeight={'bold'} color={'silver'}>
                {'Con esta compra acumulaste: '}
              </Label>

              <Label
                fontWeight={'bold'}
                style={styles.descriptionPoints}
                type={'h1'}>
                {product?.Points} puntos
              </Label>
            </View>
          </>
        </ScrollView>
        <View style={styles.logoutButtonContainer}>
          <Button
            label={'Aceptar'}
            type={'blue'}
            containerStyles={styles.buttonLogout}
            onPress={() => onHandleSubmit(product)}
          />
        </View>
      </View>
    </>
  );
}
