const CREATE_COMPANY = "companyWS/createCompany";
const GET_COMPANIES = "companyWS/getCompanies";

import {handleApiFetchGET, handleApiFetchPOST, REST_ROOT_ENDPOINT} from "../utils/apiUtil";
import {DEFAULT_REST_PARAMS_POST} from "./applicationServerConstants";

class CompanyApi {
    static createCompany(company) {
        let request = {
            ...DEFAULT_REST_PARAMS_POST,
            body: JSON.stringify(company)
        };
        return handleApiFetchPOST(REST_ROOT_ENDPOINT + CREATE_COMPANY, request);
    }
    static getCompanies() {
        return handleApiFetchGET(REST_ROOT_ENDPOINT + GET_COMPANIES);
    }
}

export default CompanyApi;