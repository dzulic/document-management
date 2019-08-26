import {USER_NAME_SESSION_ATTRIBUTE_NAME} from "../utils/Constants";
import {handleApiFetchGET, handleApiFetchPOST, REST_ROOT_ENDPOINT} from "../utils/apiUtil";
import {DEFAULT_REST_PARAMS_GET, DEFAULT_REST_PARAMS_POST} from "./applicationServerConstants";

const CREATE_COMPANY = "companyWS/createCompany";
const GET_COMPANIES = "companyWS/getCompanies";

class CompanyApi {
    static createCompany(company) {
        let defaultrestparamspost = DEFAULT_REST_PARAMS_POST;
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);

        defaultrestparamspost.headers = {
            'Content-Type': 'application/json',
            Authorization: 'Basic ' + window.btoa(String.raw`${user}`)
        };

        let request = {
            ...defaultrestparamspost,
            body: JSON.stringify(company)
        };
        return handleApiFetchPOST(REST_ROOT_ENDPOINT + CREATE_COMPANY, request);
    }
    static getCompanies() {
        let defaultrestparamspost = DEFAULT_REST_PARAMS_GET;
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);

        defaultrestparamspost.headers = {
            'Content-Type': 'application/json',
            Authorization: 'Basic ' + window.btoa(String.raw`${user}`)
        };
        let request = {
            ...defaultrestparamspost
        };
        return handleApiFetchGET(REST_ROOT_ENDPOINT + GET_COMPANIES, request);
    }
}

export default CompanyApi;