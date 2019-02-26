import {fork} from "redux-saga/effects";
import {takeLatest, takeEvery} from "redux-saga";
import * as types from '../utils/actionTypes';
import {loginUser} from '../sagas/loginSaga';

// main saga generators
export function* sagas() {
    yield [
        fork(takeEvery, types.LOGIN, loginUser),

    ];
}
