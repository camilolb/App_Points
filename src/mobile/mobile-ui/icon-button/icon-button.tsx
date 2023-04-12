import React from 'react';

import {Pressable} from 'react-native';
import Close from '../images/Close';
import styles from './icon-button.styles';
import SimpleArrow from '../images/SimpleArrow';
import {hexToRgbA} from '../../../shared';

/* eslint-disable-next-line */
export interface IconButtonProps {
  name: 'arrow-left' | 'close';
  backgroundColor?: string;
  transparent?: boolean;
  onPress?: () => void;
}

function Icon({name}: Pick<IconButtonProps, 'name'>) {
  switch (name) {
    case 'close':
      return <Close />;
    case 'arrow-left':
      return <SimpleArrow fill={'#1570EF'} />;
  }
}

export function IconButton({
  backgroundColor = '#ffffff',
  name,
  transparent,
  onPress,
}: IconButtonProps) {
  const containerStyles = [styles.container, {backgroundColor}];
  if (transparent) {
    containerStyles.push({
      backgroundColor: hexToRgbA(backgroundColor, 0.5),
    });
  }

  const handleOnPress = () => {
    if (onPress != null) {
      onPress();
    }
  };
  return (
    <Pressable onPress={handleOnPress} style={containerStyles}>
      <Icon name={name} />
    </Pressable>
  );
}

export default IconButton;
