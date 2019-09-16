import ApiUser from "../api/UserApi";
import {call, put} from "redux-saga/effects";
import {showWaitingDialog} from "../actions/actions";
import {SHOW_ERROR_MODAL, SHOW_SUCCESS_DIALOG} from "../utils/actionTypes";


export function* createUser(action) {
    yield put(showWaitingDialog(true));
    try {
        const response = yield call(ApiUser.createUser, action.payload);


        if (response.success === false) {
            throw new Error(response.message);
        }

        yield put(showWaitingDialog(false));

        yield put({
            type: SHOW_SUCCESS_DIALOG,
            showSuccessModal: true,
            msg: "User created successfully"
        });
    } catch (e) {
        yield put(showWaitingDialog(false));

        yield put({
            type: SHOW_ERROR_MODAL,
            message: "Error creating user"
        });
    }
}