import apiRequest from '../lib/apiRequest.js';

export const getTodos = () => {
  return apiRequest.get('/todos');
};
