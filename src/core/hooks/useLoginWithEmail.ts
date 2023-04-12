import {useMutation} from 'react-query';
import di from '../di';
import {SessionStorageType, useSession} from '../frameworks/jotai';
import {IUserEntity} from '../domain';

export function useLoginWithEmail() {
  const [sessionInformation, setSessionInformation] = useSession();
  return useMutation<IUserEntity, Error, {username: string; password: string}>(
    ['LOGIN_USER'],
    user => {
      return di.securityUseCase.loginwithEmail(user.username, user.password);
    },
    {
      onSuccess: async e => {
        const {token} = sessionInformation as SessionStorageType;
        if (token === '') setSessionInformation({token: e.Token, user: e});
      },
    },
  );
}
