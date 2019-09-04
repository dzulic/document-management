import ApiUser from "../api/UserApi";
import {call, put} from "redux-saga/effects";
import {showWaitingDialog} from "../actions/actions";


export function* createUser(action) {
    yield put(showWaitingDialog(true));
    try {
        console.log(action.property)
        const response = yield call(ApiUser.createUser, action.property);


        if (response.success === false) {
            throw new Error(response.message);
        }

        yield put(showWaitingDialog(false));

    } catch (e) {
        yield put(showWaitingDialog(false));

        yield put({
            type: 'SHOW_ERROR_MODAL',
            message: ""
        });
    }
}