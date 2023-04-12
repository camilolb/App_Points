import {IHttp} from '../infrastructures/interfaces';
import {ISecurityRepository} from './interfaces';
import {signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {auth} from '../../frameworks/configs/firebase-config';
import {IUserEntity, User} from '../../domain';

export class SecurityRepository implements ISecurityRepository {
  constructor(readonly http: IHttp) {}

  async loginWithEmail(
    userName: string,
    password: string,
  ): Promise<IUserEntity> {
    const res = await signInWithEmailAndPassword(auth, userName, password);
    return new User({
      email: res?.user?.email,
      nickname: res?.user?.displayName,
      image: res?.user?.photoURL,
      token: await res?.user?.getIdToken(),
    });
  }

  async userLogout(): Promise<void> {
    return await signOut(auth);
  }
}
