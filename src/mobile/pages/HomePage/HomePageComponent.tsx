import React from 'react';
import {Button, Label} from '../../mobile-ui';
import styles from './HomePage.styles';
import {IProductEntity} from '../../../core/domain';
import {ProductInformationItem} from '../../../shared';
import {View, FlatList, Pressable} from 'react-native';

type Props = {
  onHandleEdit: (product?: IProductEntity) => void;
  productList?: IProductEntity[];
  sumRedemptionPoints: string;
  onHandleFilterProducts: (showRedeemed?: boolean) => void;
  showRedeemedProducts?: boolean;
  handleGoToProfile: () => void;
};

export function HomePageComponent({
  productList,
  onHandleEdit,
  sumRedemptionPoints,
  onHandleFilterProducts,
  showRedeemedProducts,
  handleGoToProfile,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Label color={'black'} fontWeight={'bold'} type={'h2'}>
          Bienvenido de vuelta!
        </Label>
        <Pressable onPress={handleGoToProfile}>
          <Label type={'h4'} fontWeight={'300'} style={styles.headerText}>
            Ruben Rodriguez
          </Label>
        </Pressable>
      </View>
      <View style={styles.pointsCardContainer}>
        <Label type={'h4'} fontWeight={'bold'} color={'silver'}>
          TUS PUNTOS
        </Label>
        <View style={styles.card}>
          <Label type={'h4'} fontWeight={'bold'} color={'white'}>
            Diciembre
          </Label>
          <Label
            type={'big'}
            fontWeight={'bold'}
            style={styles.cardTextPoints}
            color={'white'}>
            {sumRedemptionPoints} pts
          </Label>
        </View>
      </View>
      <View style={styles.productsContainer}>
        <Label type={'h4'} fontWeight={'bold'} color={'silver'}>
          TUS MOVIMIENTOS
        </Label>
        <View style={styles.productListContainer}>
          <FlatList
            contentContainerStyle={styles.productScrollView}
            data={productList}
            keyExtractor={item => item.Id.toString()}
            renderItem={({item}) => (
              <ProductInformationItem data={item} onPress={onHandleEdit} />
            )}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonGroup}>
          {showRedeemedProducts != null && (
            <Button
              label={'Todos'}
              type={'blue'}
              containerStyles={styles.button}
              labelStyles={styles.buttonLabel}
              onPress={() => onHandleFilterProducts(undefined)}
            />
          )}
          {showRedeemedProducts == null && (
            <>
              <Button
                label={'Ganados'}
                type={'blue'}
                containerStyles={styles.button}
                labelStyles={styles.buttonLabel}
                onPress={() => onHandleFilterProducts(true)}
              />
              <Button
                label={'Canjeados'}
                containerStyles={styles.button}
                labelStyles={styles.buttonLabel}
                type={'blue'}
                onPress={() => onHandleFilterProducts(false)}
              />
            </>
          )}
        </View>
      </View>
    </View>
  );
}
