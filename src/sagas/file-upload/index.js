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

function* updateFile(data) {
  const { value } = data;
  const formData  = new FormData();
  console.log("ID: ", value.fileId, value.newName);
  
  formData.append('fileId', value.fileId);
  formData.append('newName', value.newName);
  
  const payload = yield call(() => services.updateFile(formData));
  yield put({ type: types.UPDATE_FILE_SUCCESS, payload });
}

function* updateFileStart() {
  yield takeEvery(
    types.UPDATE_FILE_START, updateFile);
}

function* deleteFile(data) {
  const formData  = new FormData();
  formData.append('fileId', data.fileId);
  
  const payload = yield call(() => services.deleteFile(formData));
  yield put({ type: types.DELETE_FILE_SUCCESS, payload });
}

function* deleteFileStart() {
  yield takeEvery(
    types.DELETE_FILE_START, deleteFile);
}

export default function* rootSaga() {
  yield all([
    startToGetAllFiles(),
    startUploadingFiles(),
    updateFileStart(),
    deleteFileStart(),
  ]);
}
