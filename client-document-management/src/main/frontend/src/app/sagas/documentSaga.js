import {call, put} from "redux-saga/effects";
import {openFillTemplateModal, showWaitingDialog} from "../actions/actions";
import DocumentApi from "../api/DocumentApi";
import {SHOW_ERROR_MODAL, SHOW_SUCCESS_DIALOG} from "../utils/actionTypes";

export function* openDocument(action) {

    yield put(openFillTemplateModal(action.payload));
}


export function* searchDocument(action) {

    try {
        yield put(showWaitingDialog(true));
        const response = yield call(DocumentApi.searchDocument, action.payload);
        if (response.success === false) {
            throw new Error(response.message);
        }
        if (response) {
            const searchedDocument = {
                key: "SEARCHED_DOCUMENT",
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
            message: "Error searching documents"
        });
    }
}


export function* saveDocuments(action) {

    try {
        yield put(showWaitingDialog(true));
        const response = yield call(DocumentApi.saveDocuments, action.payload);

        if (response.success === false) {
            throw new Error(response.message);
        }

        yield put(showWaitingDialog(false));
        yield put({
            type: SHOW_SUCCESS_DIALOG,
            showSuccessModal: true,
            msg: "Successfully saved documents"
        });
    } catch (e) {
        yield put(showWaitingDialog(false));

        yield put({
            type: SHOW_ERROR_MODAL,
            message: "Document haven't been saved"
        });
    }
}
