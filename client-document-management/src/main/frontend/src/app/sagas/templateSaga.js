import {call, put} from "redux-saga/effects";
import {showWaitingDialog} from "../actions/actions";
import TemplateApi from "../api/TemplateApi";

export function* createTemplate(action) {

    try {
        console.log("CT", action)
        yield put(showWaitingDialog(true));
        const response = yield call(TemplateApi.createTemplate, action.payload);

        if (response.success === false) {
            throw new Error(response.message);
        }

        if (response) {
            console.log("RE", response);
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
