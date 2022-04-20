import apiRequest from '../lib/apiRequest.js';

export const getPhotos = () => {
  return apiRequest.get('/photos');
};
