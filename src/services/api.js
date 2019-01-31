import { API_URL } from '../const/api';

function callApi(endpoint, header) {
  return fetch(`${API_URL}${endpoint}`, header)
  .then(response => response.json())
  .catch(error => error);
}

export const getAllFiles = body => callApi('/file/all/files', {
  method: 'get',
});

export const uploadFiles = body => callApi('/file/upload/multiple', {
  method: 'post',
  body,
});

export const updateFile = body  => callApi('/file/update', {
  method: 'put',
  body,
});

export const deleteFile = body => callApi('/file/delete', {
  method: 'delete',
  body,
});