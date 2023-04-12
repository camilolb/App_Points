import React from 'react';
import {render} from '@testing-library/react-native';

import NavBarIcon from './nav-bar-icon';

describe('NavBarIcon', () => {
  it('should render successfully', () => {
    const {container} = render(<NavBarIcon />);
    expect(container).toBeTruthy();
  });
});
