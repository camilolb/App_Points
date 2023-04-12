import {useMutation} from 'react-query';
import di from '../di';
import {useSession} from '../frameworks/jotai';

export function useUserLogout() {
  const [, setSessionInformation] = useSession();
  return useMutation<void, Error>(
    ['LOGOUT_USER'],
    () => {
      return di.securityUseCase.logoutUser();
    },
    {
      onSuccess: () => {
        setSessionInformation({token: '', user: undefined});
      },
    },
  );
}
