import { put, call, takeEvery, all } from "redux-saga/effects";
import * as types from "../../const/actions";
import * as services from "../../services/api";

function* getAllFiles() {
  const payload = yield call(() => services.getAllFiles());
  yield put({ type: types.GET_ALL_FILES_SUCCESS, payload });
}

function* startToGetAllFiles() {
  yield takeEvery(
    types.GET_ALL_FILES_START, getAllFiles);
}

function* getUploadedFiles(files) {
  const formData  = new FormData();
  files.payload.forEach(file => {
    formData.append('files', file);
  });

  const payload = yield call(() => services.uploadFiles(formData));
  yield put({ type: types.UPLOAD_FILE_SUCCESS, payload });
}

function* startUploadingFiles() {
  yield takeEvery(
    types.UPLOAD_FILE_START, getUploadedFiles);
}

export default function* rootSaga() {
  yield all([startToGetAllFiles(), startUploadingFiles()]);
}
