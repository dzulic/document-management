import ApiLogin from "../api/LoginApi";
import {call, put} from "redux-saga/effects";
import {LOGIN_USER, USER_LOGGED_SESSION} from "../utils/Constants";
import {FETCH_COMPANIES} from "../utils/actionTypes";
import {showWaitingDialog} from "../actions/actions";

export function* loginUser(action) {

    try {
        yield put(showWaitingDialog(true));
        const response = yield call(ApiLogin.login, action.property.user);

        if (response.success === false) {
            throw new Error(response.message);
        }

        if (response) {

            const loginProperty = {
                key: LOGIN_USER,
                value: response.data
            };

            yield put({
                type: 'ADD_EDIT_APP_PROP_STORE',
                property: loginProperty
            });

            localStorage.setItem(USER_LOGGED_SESSION, JSON.stringify(response.data));
            yield call((promise) => promise, yield put({type: FETCH_COMPANIES}));
            window.location = "/main";
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

export function* logoutUser(action) {

    yield put(showWaitingDialog(true));
    try {
        const response = yield call(ApiLogin.logout);

        if (response.success === false) {
            throw new Error(response.message);
        }
        localStorage.setItem(USER_LOGGED_SESSION, JSON.stringify(response.data));


        //redirect to homepage
        window.location = 'http://localhost:8090/login';
        yield put(showWaitingDialog(false));

    } catch (e) {
        yield put(showWaitingDialog(false));

        yield put({
            type: 'SHOW_ERROR_MODAL',
            message: handleError(e)
        });
    }
}