import {AxiosResponse} from 'axios';

export function handleResponsePetition<T>(
  response: AxiosResponse,
): AxiosResponse<T> {
  if (
    (response?.data?.success != null && !response.data.success) ||
    (response.data?.errors != null && response.data?.errors.length > 0)
  ) {
    const reqRes =
      typeof response.data === 'string'
        ? JSON.parse(response.data)
        : response.data;
    if (reqRes.response?.errors != null) {
      const message = reqRes.response.errors[0].message;
      const detailMessage = Object.values(
        reqRes.response.errors[0].details || {},
      )[0];
      reject({
        name:
          detailMessage != null && typeof detailMessage === 'string'
            ? detailMessage
            : message,
      });
    } else if (reqRes.errors != null) {
      const message = reqRes.errors[0].message;
      const detailMessage = Object.values(reqRes.errors[0].details || {})[0];
      reject({
        name:
          detailMessage != null && typeof detailMessage === 'string'
            ? detailMessage
            : message,
      });
    } else {
      reject({name: 'Unexpected error occurred'});
    }
  }
  return response;
}
function reject({name}: {name: string}) {
  throw new Error(name);
}
