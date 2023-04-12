import React from 'react';

import {TouchableOpacity} from 'react-native';
import styles from './system-button.styles';
import Label from '../label/label';

export interface HeaderButtonProps {
  title: string;
  onPress?: () => void;
}

export function SystemButton({title, onPress}: HeaderButtonProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Label fontWeight={'700'} style={styles.title} type={'small'}>
        {title}
      </Label>
    </TouchableOpacity>
  );
}

export default SystemButton;
