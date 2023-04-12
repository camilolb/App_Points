import {BaseEntity} from '../../../shared';
import {IUserEntity, IUserEntityData} from '../interfaces/iUser';

export class User extends BaseEntity<IUserEntity> implements IUserEntity {
  private _Email: string | null;
  private _NickName: string | null;
  private _Image: string | null;
  private _Token: string | null;

  constructor(request: IUserEntityData) {
    super();
    this._Email = request?.email;
    this._NickName = request?.nickname;
    this._Image = request?.image;
    this._Token = request?.token;
  }
  get Email(): string | null {
    return this._Email;
  }
  get NickName(): string | null {
    return this._NickName;
  }
  get Image(): string | null {
    return this._Image;
  }
  get Token(): string | null {
    return this._Token;
  }
}
