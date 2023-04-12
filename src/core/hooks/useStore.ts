import {useQuery, useQueryClient} from 'react-query';
import di from '../di';

export function useStore() {
  const queryClient = useQueryClient();
  return useQuery(['PRODUCTS'], async () => {
    await queryClient.invalidateQueries(['PRODUCT']);
    return di.storeUseCase.getProducts();
  });
}
