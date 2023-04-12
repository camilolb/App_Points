import React from 'react';

import {Text, TextProps} from 'react-native';
import styles from './label.styles';

export interface LabelProps extends TextProps {
  type?:
    | 'regular'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'small'
    | 'extraSmall'
    | 'big';
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  color?: 'white' | 'black' | 'blue' | 'silver';
}

export function Label({
  children,
  type,
  style,
  fontWeight = 'normal',
  color,
  ...props
}: LabelProps) {
  const labelStyles = [styles.default, style, {fontWeight}];
  switch (type) {
    case 'regular':
      labelStyles.push(styles.regular);
      break;
    case 'h1':
      labelStyles.push(styles.h1);
      break;
    case 'h2':
      labelStyles.push(styles.h2);
      break;
    case 'h3':
      labelStyles.push(styles.h3);
      break;
    case 'h4':
      labelStyles.push(styles.h4);
      break;
    case 'h5':
      labelStyles.push(styles.h5);
      break;
    case 'small':
      labelStyles.push(styles.small);
      break;
    case 'extraSmall':
      labelStyles.push(styles.extraSmall);
      break;
    case 'big':
      labelStyles.push(styles.big);
      break;
  }

  switch (color) {
    case 'white':
      labelStyles.push(styles.white);
      break;
    case 'blue':
      labelStyles.push(styles.blue);
      break;
    case 'silver':
      labelStyles.push(styles.silver);
      break;
  }
  return (
    <Text style={labelStyles} {...props}>
      {children}
    </Text>
  );
}

export default Label;
