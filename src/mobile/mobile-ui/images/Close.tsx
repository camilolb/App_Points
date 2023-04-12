import React from 'react';
import Svg, {Path} from 'react-native-svg';

const Close = () => (
  <Svg width={14} height={14} fill="none">
    <Path
      d="m7 5.586 4.95-4.95 1.414 1.414L8.414 7l4.95 4.95-1.414 1.414L7 8.414l-4.95 4.95L.636 11.95 5.586 7 .636 2.05 2.05.636 7 5.586Z"
      fill="#fff"
    />
  </Svg>
);

export default Close;
