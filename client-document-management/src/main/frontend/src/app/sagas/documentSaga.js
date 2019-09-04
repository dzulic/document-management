import {call, put} from "redux-saga/effects";
import {showWaitingDialog} from "../actions/actions";
import DocumentApi from "../api/DocumentApi";

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
                property: searchedDocument
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


export function* saveDocuments(action) {

    try {
        yield put(showWaitingDialog(true));
        const response = yield call(DocumentApi.saveDocuments, action.payload);

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
