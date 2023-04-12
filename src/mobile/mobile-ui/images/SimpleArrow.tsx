import * as React from 'react';
import Svg, {Path, Mask} from 'react-native-svg';
import {StyleProp, ViewStyle} from 'react-native';

const SimpleArrow = ({
  fill = '#000',
  style,
  ...props
}: {
  fill?: string;
  style?: StyleProp<ViewStyle>;
}) => (
  <Svg width={18} height={18} style={style} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.71 4.41 8.12 9l4.59 4.59L11.29 15l-6-6 6-6 1.42 1.41Z"
      fill={fill}
    />
    <Mask id="a" x={5} y={3} width={8} height={12}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.71 4.41 8.12 9l4.59 4.59L11.29 15l-6-6 6-6 1.42 1.41Z"
        fill={fill}
      />
    </Mask>
  </Svg>
);

export default SimpleArrow;
