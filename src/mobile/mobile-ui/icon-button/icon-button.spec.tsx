import React from 'react';
import {render} from '@testing-library/react-native';

import IconButton from './icon-button';

describe('IconButton', () => {
  it('should render successfully', () => {
    const {container} = render(<IconButton />);
    expect(container).toBeTruthy();
  });
});
