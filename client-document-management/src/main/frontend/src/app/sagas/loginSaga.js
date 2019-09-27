import ApiLogin from "../api/LoginApi";
import {call, put} from "redux-saga/effects";
import {LOGIN_USER, SUCCESS, USER_LOGGED_SESSION} from "../utils/Constants";
import {showWaitingDialog} from "../actions/actions";
import {SHOW_ERROR_MODAL, SHOW_SUCCESS_DIALOG} from "../utils/actionTypes";

export function* loginUser(action) {

    try {
        yield put(showWaitingDialog(true));
        const response = yield call(ApiLogin.login, action.payload.user);

        if (response.message!=SUCCESS) {
            throw new Error(response.message);
        }

        if (response) {

            const loginProperty = {
                key: LOGIN_USER,
                value: response.data
            };

            yield put({
                type: 'ADD_EDIT_APP_PROP_STORE',
                payload: loginProperty
            });

            localStorage.setItem(USER_LOGGED_SESSION, JSON.stringify(response.data));
            window.location = "/";
        }
        yield put(showWaitingDialog(false));

    } catch (e) {
        yield put(showWaitingDialog(false));

        yield put({
            type: SHOW_ERROR_MODAL,
            message: "Error logging user"
        });
    }
}

export function* logoutUser(action) {

    yield put(showWaitingDialog(true));
    try {
        const response = yield call(ApiLogin.logout);

        if (response.message!=SUCCESS) {
            throw new Error(response.message);
        }
        localStorage.setItem(USER_LOGGED_SESSION, JSON.stringify(response.data));


        //redirect to homepage
        window.location = 'http://localhost:8090/login';
        yield put(showWaitingDialog(false));
        yield put({
            type: SHOW_SUCCESS_DIALOG,
            showSuccessModal: true,
            msg: "User logged out"
        });
    } catch (e) {
        yield put(showWaitingDialog(false));

        yield put({
            type: SHOW_ERROR_MODAL,
            message: "Can't logout user"
        });
    }
}