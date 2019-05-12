import {call, put} from "redux-saga/effects";
import CompanyApi from "../api/CompanyApi";

export function* createCompany(action) {

    try {
        const response = yield call(CompanyApi.createCompany, action.company);

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