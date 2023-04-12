import React from 'react';
import {render} from '@testing-library/react-native';

import SystemButton from './system-button';

describe('HeaderButton', () => {
  it('should render successfully', () => {
    const {container} = render(<SystemButton />);
    expect(container).toBeTruthy();
  });
});
