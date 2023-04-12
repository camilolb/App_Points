import Axios, {AxiosInstance} from 'axios';
import {handleResponsePetition} from '../../../shared/share-utils/handle-response';
import {IHttp, IRequestOption} from './interfaces';

export class Http implements IHttp {
  axios: AxiosInstance;

  constructor() {
    this.axios = Axios.create();
  }

  request<T>(requestOption: IRequestOption): Promise<T> {
    return this.axios
      .request({
        method: requestOption.method,
        url: requestOption.url,
        data: requestOption.body,
        headers: requestOption.headers,
      })
      .then(res => res.data);
  }
  requestFunction<T>(requestOption: IRequestOption): Promise<T> {
    return this.axios
      .request({
        method: requestOption.method,
        url: requestOption.url,
        data: requestOption.body,
        headers: requestOption.headers,
      })
      .then(res => handleResponsePetition<T>(res))
      .then(res => res.data);
  }
}
