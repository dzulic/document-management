import ApiLogin from "../api/LoginApi";
import {call, put} from "redux-saga/effects";

export function* loginUser(action) {

    try {
        const response = yield call(ApiLogin.login, action.user);

        if (response.success === false) {
            throw new Error(response.message);
        }

        if (response.loggedIn === true) {
            //redirect to homepage
            window.location = "/";
        }


        if (response) {
            const loginProperty = {
                key: 'LOGIN_USER',
                value: response
            };

            yield put({
                type: 'ADD_EDIT_APP_PROP_STORE',
                property: loginProperty
            });
        }

    } catch (e) {
        yield put({
            type: 'SHOW_ERROR_MODAL',
            message: ""
        });
    }
}

export function* logoutUser(action) {

    yield put(showWaitingDialog('logoutUser'));
    try {
        const response = yield call(ApiLogin.logout);

        if (response.success === false) {
            throw new Error(response.message);
        }

        //redirect to homepage
        window.location = context_root_page_redirect + 'login';
    } catch (e) {
        yield put({
            type: 'SHOW_ERROR_MODAL',
            message: handleError(e)
        });
    }
}