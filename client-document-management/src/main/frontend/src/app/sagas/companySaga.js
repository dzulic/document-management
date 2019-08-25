import {call, put} from "redux-saga/effects";
import CompanyApi from "../api/CompanyApi";
import {COMPANIES} from "../utils/Constants";
import {ADD_EDIT_APP_PROP_STORE} from "../utils/actionTypes";

export function* fetchCompanies(action) {
    try {
        const response = yield call(CompanyApi.getCompanies, action.property.company);
        if (response.success === false) {
            throw new Error(response.message);
        }
        if (response) {
            console.log("RESP COMPANIES", response);

            let companiesMap = response.map((company) => {
                return {key: company.id, value: company.name};
            });
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

        if (response.loggedIn === true) {
            //redirect to homepage
            window.location = "/";
        }


        if (response) {
            const loginProperty = {
                key: 'COMPANY',
                value: response
            };

            yield put({
                type: ADD_EDIT_APP_PROP_STORE,
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