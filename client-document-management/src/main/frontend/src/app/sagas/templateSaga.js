import {call, put} from "redux-saga/effects";
import {openFillTemplateModal, openTemplateModel, showWaitingDialog} from "../actions/actions";
import TemplateApi from "../api/TemplateApi";
import {SHOW_ERROR_MODAL, SHOW_SUCCESS_DIALOG} from "../utils/actionTypes";

export function* createTemplate(action) {

    try {
        yield put(showWaitingDialog(true));
        const response = yield call(TemplateApi.createTemplate, action.payload);

        if (response.success === false) {
            throw new Error(response.message);
        }

        yield put(showWaitingDialog(false));
        yield put({
            type: SHOW_SUCCESS_DIALOG,
            showSuccessModal: true,
            msg: "Template created successfully"
        });
    } catch (e) {
        yield put(showWaitingDialog(false));

        yield put({
            type: SHOW_ERROR_MODAL,
            message: "errorCreatingTemplate"
        });
    }
}
export function* openTemplate(action) {
    try {
        const newAction = {
            name: null,
            id: action.payload.templateId
        };
        const response = yield call(TemplateApi.getTemplate, newAction);

        if (response.success === false) {
            throw new Error(response.message);
        }

        if (response) {
            yield put(openFillTemplateModal(response.data));
        }
    } catch (e) {
        yield put(showWaitingDialog(false));

        yield put({
            type: SHOW_ERROR_MODAL,
            message: "errorOpeningTemplate"
        });
    }
}

export function* searchTemplate(action) {
    try {
        yield put(showWaitingDialog(true));
        const response = yield call(TemplateApi.searchTemplate, action.payload);
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
            type: SHOW_ERROR_MODAL,
            message: "errorSearchingTemplates"
        });
    }
}

