import {USER_LOGGED_SESSION} from "../utils/Constants";
import {handleApiFetchGET, handleApiFetchPOST, REST_ROOT_ENDPOINT} from "../utils/apiUtil";
import {DEFAULT_REST_PARAMS_GET, DEFAULT_REST_PARAMS_POST} from "./applicationServerConstants";

const CREATE_COMPANY = "companyWS/createCompany";
const GET_COMPANIES = "companyWS/getCompanies";

class CompanyApi {
    static createCompany(company) {
        let defaultrestparamspost = DEFAULT_REST_PARAMS_POST;
        let user = JSON.parse(localStorage.getItem(USER_LOGGED_SESSION));

        defaultrestparamspost.headers = {
            'Content-Type': 'application/json',
            Authorization: 'Basic ' + window.btoa(user.userName + ":" + user.password),
        };

        let request = {
            ...defaultrestparamspost,
            body: JSON.stringify(company)
        };
        return handleApiFetchPOST(REST_ROOT_ENDPOINT + CREATE_COMPANY, request);
    }
    static getCompanies() {
        let defaultrestparamspost = DEFAULT_REST_PARAMS_GET;
        let user = JSON.parse(localStorage.getItem(USER_LOGGED_SESSION));

        defaultrestparamspost.headers = {
            'Content-Type': 'application/json',
            Authorization: 'Basic ' + window.btoa(user.userName + ":" + user.password)
        };
        let request = {
            ...defaultrestparamspost
        };
        return handleApiFetchGET(REST_ROOT_ENDPOINT + GET_COMPANIES, request);
    }
}

export default CompanyApi;