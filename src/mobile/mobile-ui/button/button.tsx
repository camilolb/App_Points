import React from 'react';
import {Pressable, TextStyle, ViewStyle} from 'react-native';
import styles from './button.styles';
import Label from '../label/label';
// import IconFacebook from '../images/svg/IconFacebook.svg';
// import IconGoogle from '../images/svg/IconGoogle.svg';
// import IconApple from '../images/svg/IconApple.svg';
// import EmailIcon from '../images/svg/EmailIcon.svg';
// import {Check} from '../../index';

export interface ButtonProps {
  disabled?: boolean;
  onPress?: () => void;
  label: string;
  style?: TextStyle;
  icon?: 'facebook' | 'google' | 'apple' | 'email' | 'check';
  containerStyles?: ViewStyle;
  labelStyles?: TextStyle;
  type?: 'regular' | 'transparentBordered' | 'transparent' | 'black' | 'blue';
}

// function ButtonIcon({icon}: Pick<ButtonProps, 'icon'>) {
//   if (icon != null) {
//     switch (icon) {
//       case 'facebook':
//         return <IconFacebook />;
//       case 'google':
//         return <IconGoogle />;
//       case 'apple':
//         return <IconApple width={17} />;
//       case 'email':
//         return <EmailIcon width={17} />;
//       case 'check':
//         return <Check width={17} />;
//     }
//   }
//   return null;
// }

export function Button({
  onPress,
  label,
  icon,
  containerStyles,
  labelStyles,
  type,
  disabled,
}: ButtonProps) {
  const containerStyle: ViewStyle[] = [styles.container];
  const labelStyle: TextStyle[] = [styles.text];
  if (containerStyles != null) {
    containerStyle.push(containerStyles);
  }
  if (disabled) {
    containerStyle.push(styles.containerDisabled);
  }
  if (labelStyles != null) {
    labelStyle.push(labelStyles);
  }
  switch (type) {
    case 'transparentBordered':
      containerStyle.push(styles.transparentBordered.container);
      labelStyle.push(styles.transparentBordered.text);
      break;
    case 'transparent':
      containerStyle.push(styles.transparent.container);
      labelStyle.push(styles.transparent.text);
      break;
    case 'black':
      containerStyle.push(styles.black.container);
      labelStyle.push(styles.black.text);
      break;
    case 'blue':
      containerStyle.push(styles.blue.container);
      labelStyle.push(styles.blue.text);
      break;
  }

  return (
    <Pressable disabled={disabled} style={containerStyle} onPress={onPress}>
      {/* {icon !== 'check' && <ButtonIcon icon={icon} />} */}
      <Label style={labelStyle} type={'small'} fontWeight={'bold'}>
        {label}
      </Label>
      {/* {icon === 'check' && <ButtonIcon icon={icon} />} */}
    </Pressable>
  );
}

export default Button;
