import {Method} from 'axios';

export interface IRequestOption {
  readonly method: Method;
  readonly url: string;
  readonly headers?: any;
  readonly body?: {[key: string]: any};
}

export interface IHttp {
  // eslint-disable-next-line no-unused-vars
  request<T>(requestOption: IRequestOption): Promise<T>;
  // eslint-disable-next-line no-unused-vars
  requestFunction<T>(requestOption: IRequestOption): Promise<T>;
}
