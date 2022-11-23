import { api } from './base';

export const getPins = async () => {
  const { data } = await api.get({ url: '/pins' });
  return { data };
};

export const getNotes = async (boardId) => {
  const { data } = await api.get({ url: `/boards/${boardId}/notes` });
  return { data };
};
