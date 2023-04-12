import React from 'react';
import {render} from '@testing-library/react-native';
import Header from './header';

describe('Header', () => {
  it('should render successfully', () => {
    const {container} = render(<Header />);
    expect(container).toBeTruthy();
  });
});
