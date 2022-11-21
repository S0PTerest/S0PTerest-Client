import { api } from './base';

export const getPins = async () => {
  const { data } = await api.get({ url: '/pins' });
  return { data };
};
