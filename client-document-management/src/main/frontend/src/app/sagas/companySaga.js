import {call, put} from "redux-saga/effects";
import CompanyApi from "../api/CompanyApi";
import {COMPANIES} from "../utils/Constants";
import {ADD_EDIT_APP_PROP_STORE, SHOW_ERROR_MODAL, SHOW_SUCCESS_DIALOG} from "../utils/actionTypes";

export function* fetchCompanies() {
    try {
        const response = yield call(CompanyApi.getCompanies);
        if (response.success === false) {
            throw new Error(response.message);
        }
        if (response) {
            let companiesMap = response.data.map((company) => {
                return {label: company.companyName, value: JSON.stringify(company.companyId)};
            });

            localStorage.setItem(COMPANIES, JSON.stringify(companiesMap));
        }
    } catch (e) {
        yield put({
            type: SHOW_ERROR_MODAL,
            message: "Error fetching companies"
        });
    }

}


export function* createCompany(action) {

    try {
        const response = yield call(CompanyApi.createCompany, action.payload.company);

        if (response.success === false) {
            throw new Error(response.message);
        }

        if (response) {
            const company = {
                key: 'COMPANY',
                value: response
            };

            yield put({
                type: ADD_EDIT_APP_PROP_STORE,
                payload: company
            });
        }
        yield put({
            type: SHOW_SUCCESS_DIALOG,
            showSuccessModal: true,
            msg: "Company created"
        });
    } catch (e) {
        yield put({
            type: SHOW_ERROR_MODAL,
            message: "Error creating company"
        });
    }
}