import ApiLogin from "../api/LoginApi";
import {call, put} from "redux-saga/effects";
import {LOGIN_USER} from "../utils/Constants";

export function* loginUser(action) {

    try {
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

            if (response.loggedIn === true) {
                //redirect to homepage
                //    window.location = "/main";
            }
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
        sessionStorage.setItem("USER_NAME_SESSION_ATTRIBUTE_NAME", response.username);


        //redirect to homepage
        window.location = context_root_page_redirect + 'login';
    } catch (e) {
        yield put({
            type: 'SHOW_ERROR_MODAL',
            message: handleError(e)
        });
    }
}