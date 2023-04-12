import React from 'react';
import {LoadingContext} from '../../mobile/context/LoadingContext';

export function useLoading() {
  return React.useContext(LoadingContext);
}
