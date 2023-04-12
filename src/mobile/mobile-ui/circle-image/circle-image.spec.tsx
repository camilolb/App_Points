import React from 'react';
import {render} from '@testing-library/react-native';

import CircleImage from './circle-image';

describe('CircleImage', () => {
  it('should render successfully', () => {
    const {container} = render(<CircleImage />);
    expect(container).toBeTruthy();
  });
});
