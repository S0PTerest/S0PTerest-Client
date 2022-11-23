import { api } from './base';

const USER_ID = '920e9467-c4aa-4359-974f-9310eb9b0a6a';

export const getPins = async () => {
  const { data } = await api.get({ url: '/pins' });
  return { data };
};

export const getNotes = async (boardId) => {
  const { data } = await api.get({ url: `/boards/${boardId}/notes` });
  return { data };
};

export const getUser = async () => {
  const { data } = await api.get({ url: `/user/${USER_ID}` });
  return { data };
};

export const createNote = async (boardId, body) => {
  const { data } = await api.post({ url: `/boards/${boardId}/notes`, data: body });
  return { data };
};

export const updateNote = async (boardId, noteId, body) => {
  const { data } = await api.put({ url: `/boards/${boardId}/notes/${noteId}`, data: body });
  return { data };
};
