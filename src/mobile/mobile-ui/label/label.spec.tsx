import React from 'react';
import { render } from '@testing-library/react-native';

import Label from './label';

describe('Label', () => {
  it('should render successfully', () => {
    const { container } = render(<Label />);
    expect(container).toBeTruthy();
  });
});
