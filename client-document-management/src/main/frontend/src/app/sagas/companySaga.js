import {call, put} from "redux-saga/effects";
import CompanyApi from "../api/CompanyApi";
import {COMPANIES} from "../utils/Constants";
import {ADD_EDIT_APP_PROP_STORE} from "../utils/actionTypes";

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
            console.log("RES", response)
            const companies = {
                key: COMPANIES,
                value: companiesMap
            };

            yield put({
                type: ADD_EDIT_APP_PROP_STORE,
                property: companies
            });
        }
    } catch (e) {
        yield put({
            type: 'SHOW_ERROR_MODAL',
            message: ""
        });
    }

}


export function* createCompany(action) {

    try {
        const response = yield call(CompanyApi.createCompany, action.property.company);

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
                property: company
            });
        }

    } catch (e) {
        yield put({
            type: 'SHOW_ERROR_MODAL',
            message: ""
        });
    }
}