import {useQuery, useQueryClient} from 'react-query';
import di from '../di';

export function useProduct(id?: string) {
  return useQuery(
    [],
    async () => {
      return di.storeUseCase.getProduct(id || '');
    },
    {
      enabled: !!id,
    },
  );
}
