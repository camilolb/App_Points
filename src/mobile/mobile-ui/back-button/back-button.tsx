import React from 'react';

import {Pressable} from 'react-native';
import styles from './back-button.styles';
import {NavigationProp} from '@react-navigation/native';
import {SimpleArrowIcon} from '../images';

type Props = {
  navigation: NavigationProp<any>;
  bordered?: boolean;
  transparent?: boolean;
  onlyArrow?: boolean;
  arrowBgWhite?: boolean;
  arrowBgGrey?: boolean;
};

export function BackButton({
  navigation,
  bordered,
  transparent,
  onlyArrow,
  arrowBgWhite,
  arrowBgGrey,
}: Props) {
  const arrowColor = arrowBgWhite || arrowBgGrey ? '#1570EF' : '#ffffff';
  if (navigation.canGoBack()) {
    return (
      <Pressable
        style={[
          styles.container,
          bordered && styles.bordered,
          transparent && styles.transparent,
          onlyArrow && styles.onlyArrow,
          arrowBgWhite && styles.arrowBgWhite,
          arrowBgGrey && styles.arrowBgGrey,
        ]}
        onPress={() => navigation.goBack()}>
        <SimpleArrowIcon fill={arrowColor} />
      </Pressable>
    );
  }
  return null;
}

export default BackButton;
