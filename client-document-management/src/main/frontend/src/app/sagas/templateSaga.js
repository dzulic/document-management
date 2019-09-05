import {call, put} from "redux-saga/effects";
import {openFillTemplateModal, openTemplateModel, showWaitingDialog} from "../actions/actions";
import TemplateApi from "../api/TemplateApi";

export function* createTemplate(action) {

    try {
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
export function* openTemplate(action) {
    const newAction = {
        name: null,
        id: action.payload.templateId
    };
    const response = yield call(TemplateApi.getTemplate, newAction);
    if (response) {
        yield put(openFillTemplateModal(response.data));

    }

}

export function* searchTemplate(action) {
    console.log('AC', action)
    try {
        yield put(showWaitingDialog(true));
        const response = yield call(TemplateApi.searchTemplate, {fileName: action.payload.searchByName});
        if (response.success === false) {
            throw new Error(response.message);
        }
        if (response) {
            const searchedDocument = {
                key: "SEARCHED_TEMPLATES",
                value: response.data
            };

            yield put({
                type: 'ADD_EDIT_APP_PROP_STORE',
                payload: searchedDocument
            });
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

