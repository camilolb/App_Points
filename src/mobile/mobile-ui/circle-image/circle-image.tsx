import React from 'react';

import {Image} from 'react-native';
import styles from './circle-image.styles';

export interface CircleImageProps {
  imageURL: string;
  size?: 'small' | 'big';
}

export function CircleImage({imageURL, size = 'big'}: CircleImageProps) {
  return (
    <Image
      source={{uri: imageURL}}
      style={[styles.container, size === 'small' && styles.small]}
    />
  );
}

export default CircleImage;
