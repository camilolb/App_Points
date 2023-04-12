import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {StyleProp, ViewStyle} from 'react-native';

export const FullArrow = ({
  fill = '#000',
  style,
  ...props
}: {
  fill?: string;
  style?: StyleProp<ViewStyle>;
}) => (
  <Svg style={style} width={16} height={16} fill="none" {...props}>
    <Path
      d="M8 0 6.59 1.41 12.17 7H0v2h12.17l-5.58 5.59L8 16l8-8-8-8Z"
      fill={fill}
    />
  </Svg>
);
