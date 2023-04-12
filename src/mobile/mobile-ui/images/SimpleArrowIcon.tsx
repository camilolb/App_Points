import * as React from 'react';
import Svg, {Path, Mask} from 'react-native-svg';
import {IImage} from './IImage';

export const SimpleArrowIcon = ({fill = '#fff', style}: IImage) => (
  <Svg fill="none" height={18} style={style} width={18}>
    <Path
      clipRule="evenodd"
      d="M12.71 4.41 8.12 9l4.59 4.59L11.29 15l-6-6 6-6 1.42 1.41Z"
      fill={fill}
      fillRule="evenodd"
    />
    <Mask height={12} id="a" maskUnits="userSpaceOnUse" width={8} x={5} y={3}>
      <Path
        clipRule="evenodd"
        d="M12.71 4.41 8.12 9l4.59 4.59L11.29 15l-6-6 6-6 1.42 1.41Z"
        fill={fill}
        fillRule="evenodd"
      />
    </Mask>
  </Svg>
);

export default SimpleArrowIcon;
