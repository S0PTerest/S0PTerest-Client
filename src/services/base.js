import axios from 'axios';

const BASE_URL = 'https://s0pterest.shop';

const baseHeaders = {
  Accept: '*/*',
  'Content-Type': 'application/json',
};

const baseMultipartHeaders = {
  Accept: '*/*',
  'Content-Type': 'multipart/form-data',
};

const sendRequest = ({ url, params, method, headers }) => {
  return axios[method](BASE_URL + url, {
    header: { ...baseHeaders, ...headers },
    params,
  }).then((response) => {
    return { ...response.data, axiosStatus: response.status };
  });
};

const sendRequestWithData = ({ url, data, method, headers, type }) => {
  return axios[method](BASE_URL + url, data, {
    headers: { ...(type === 'json' ? baseHeaders : baseMultipartHeaders), ...headers },
  }).then((response) => {
    return response.data;
  });
};

export const api = {
  get: ({ url, params, headers }) => sendRequest({ url, params, method: 'get', headers }),
  post: ({ url, data, headers, type }) =>
    sendRequestWithData({ url, data, method: 'post', headers, type: type ?? 'json' }),
  put: ({ url, data, headers, type }) =>
    sendRequestWithData({ url, data, method: 'put', headers, type: type ?? 'json' }),
};
