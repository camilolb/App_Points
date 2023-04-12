import {IUserEntity} from '../../interfaces';

export interface ISecurityUseCase {
  loginwithEmail(userName: string, password: String): Promise<IUserEntity>;
  logoutUser(): Promise<void>;
}
