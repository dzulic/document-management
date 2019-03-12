import {fork} from "redux-saga/effects";
import {takeEvery} from "redux-saga";
import * as types from '../utils/actionTypes';
import {loginUser} from '../sagas/loginSaga';
import {createUser} from '../sagas/userSaga'

// main saga generators
export function* sagas() {
    console.log("ACTION");
    debugger
    yield [
        fork(takeEvery, types.LOGIN, loginUser),
        takeEvery(types.CREATE_USER, createUser)
    ];
}
