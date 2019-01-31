import * as types from "../../const/actions";

/**
 * Get all files
 */

export const getAllFilesStatrt = () => {
  return {
    type: types.GET_ALL_FILES_START,
    payload: null,
  }
}

export const getAllFilesSuccess = payload => {
  return {
    type: types.GET_ALL_FILES_SUCCESS,
    payload,
  }
}

export const getAllFilesError = error => {
  return {
    type: types.GET_ALL_FILES_ERROR,
    error,
  }
}

/** 
 * File upload
*/
export const uploadFileStart = payload => {
  return {
    type: types.UPLOAD_FILE_START,
    payload,
  };
};

export const uploadFileFetched = payload => {
  return {
    type: types.UPLOAD_FILE_SUCCESS,
    payload,
  };
};

export const uploadFileError = error => {
  return {
    type: types.UPLOAD_FILE_ERROR,
    error,
  };
};
