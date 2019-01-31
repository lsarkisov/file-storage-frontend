import * as types from "../../const/actions";

export default (state = {}, action) => {
  switch (action.type) {
    case types.GET_ALL_FILES_START:
      return {
        ...state,
        isLoading: true
      };
    case types.GET_ALL_FILES_SUCCESS:
      console.log("GET ALL FILES ON START", action.payload);

      return {
        ...state,
        isLoading: false,
        files: action.payload,
        fileUploadError: false
      };
    case types.GET_ALL_FILES_ERROR:
      return {
        ...state,
        isLoading: false,
        files: null,
        fileUploadError: true
      };
    case types.UPLOAD_FILE_START:
      return {
        ...state,
        isLoading: true
      };
    case types.UPLOAD_FILE_SUCCESS:
      console.log("GET ALL UPLOADED FILES", action.payload);

      return {
        ...state,
        isLoading: false,
        files: action.payload,
        fileUploadError: false
      };
    case types.UPLOAD_FILE_ERROR:
      return {
        ...state,
        isLoading: false,
        files: null,
        fileUploadError: true
      };

    case types.DELETE_FILE_START:
      return {
        ...state,
        isLoading: true
      };
    case types.DELETE_FILE_SUCCESS:
      console.log("DELETE FILE", action.payload);

      return {
        ...state,
        isLoading: false,
        files: action.payload,
        fileUploadError: false
      };
    case types.DELETE_FILE_ERROR:
      return {
        ...state,
        isLoading: false,
        files: null,
        fileUploadError: true
      };

    default:
      return state;
  }
};
