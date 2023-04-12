import React from 'react';
import {Image, Pressable, View} from 'react-native';
import styles from './product-information-item.styles';
import {IProductEntity} from '../../core/domain';
import {Label} from '../../mobile/mobile-ui';
import {DateTime} from 'luxon';
import SimpleArrow from '../../mobile/mobile-ui/images/SimpleArrow';

export interface PaymentInformationItemProps {
  data?: IProductEntity;
  onPress: (product?: IProductEntity) => void;
}

export function ProductInformationItem({
  data,
  onPress,
}: PaymentInformationItemProps) {
  const dateTime = DateTime.fromISO(data?.CreatedAt || '');
  return (
    <Pressable style={styles.item} onPress={() => onPress(data)}>
      <Image
        style={styles.itemImage}
        source={{
          uri: data?.Image,
        }}
      />
      <View style={styles.itemDetails}>
        <Label type={'h4'} fontWeight={'bold'} color={'black'}>
          {data?.Product}
        </Label>
        <Label type={'h5'} fontWeight={'300'} style={styles.itemDate}>
          {dateTime.toFormat("d 'de' MMMM, yyyy")}
        </Label>
      </View>
      <Label type={'h4'} fontWeight={'bold'} style={styles.itemPoints}>
        {data?.IsRedemption ? (
          <Label style={styles.positivePoints} fontWeight={'bold'} type={'h4'}>
            +
          </Label>
        ) : (
          <Label style={styles.negativePoints} fontWeight={'bold'} type={'h4'}>
            -
          </Label>
        )}
        {data?.Points}
      </Label>
      <SimpleArrow fill={'#000'} style={styles.arrow} />
    </Pressable>
  );
}

export default ProductInformationItem;
