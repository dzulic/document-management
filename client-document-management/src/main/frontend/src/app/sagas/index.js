import {takeEvery} from "redux-saga";
import * as types from '../utils/actionTypes';
import {loginUser} from '../sagas/loginSaga';
import {createUser} from '../sagas/userSaga'
import {createCompany} from '../sagas/companySaga'

// main saga generators
export function* sagas() {
    yield [
        takeEvery(types.LOGIN, loginUser),
        takeEvery(types.CREATE_USER, createUser),
        takeEvery(types.CREATE_COMPANY, createCompany)
    ];
}
