import {takeEvery} from "redux-saga";
import * as types from '../utils/actionTypes';
import {loginUser} from '../sagas/loginSaga';
import {createUser} from '../sagas/userSaga'
import {createCompany, fetchCompanies} from '../sagas/companySaga'
import {openDocument, saveDocuments, searchDocument} from "../sagas/documentSaga";
import {createTemplate, openTemplate} from "../sagas/templateSaga";
import {searchTemplate} from "./templateSaga";

// main saga generators
export function* sagas() {
    yield [
        takeEvery(types.LOGIN, loginUser),
        takeEvery(types.CREATE_USER, createUser),
        takeEvery(types.CREATE_COMPANY, createCompany),
        takeEvery(types.FETCH_COMPANIES, fetchCompanies),
        takeEvery(types.SEARCH_DOCUMENT, searchDocument),
        takeEvery(types.SAVE_DOCUMENT, saveDocuments),
        takeEvery(types.OPEN_DOCUMENT, openDocument),
        takeEvery(types.CREATE_TEMPLATE, createTemplate),
        takeEvery(types.OPEN_TEMPLATE, openTemplate),
        takeEvery(types.SEARCH_TEMPLATE, searchTemplate)

    ];
}
