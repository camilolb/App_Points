import {ISecurityRepository} from '../../adapters/repositories';
import {IUserEntity} from '../interfaces';
import {ISecurityUseCase} from './interfaces';

export class SecurityUseCase implements ISecurityUseCase {
  constructor(readonly securityRepo: ISecurityRepository) {}

  async loginwithEmail(
    userName: string,
    password: string,
  ): Promise<IUserEntity> {
    return await this.securityRepo.loginWithEmail(userName, password);
  }

  async logoutUser(): Promise<void> {
    return await this.securityRepo.userLogout();
  }
}
