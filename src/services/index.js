import { api } from './base';

export const getPins = async () => {
  const { data } = await api.get({ url: '/pins' });
  return { data };
};

export const getUser = async () => {
  const { data } = await api.get({ url: '/user/920e9467-c4aa-4359-974f-9310eb9b0a6a' });
  return { data };
};
