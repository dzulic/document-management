const CREATE_COMPANY = "companyWS/createCompany";
import {handleApiFetchPOST, REST_ROOT_ENDPOINT} from "../utils/apiUtil";
import {DEFAULT_REST_PARAMS_POST} from "./applicationServerConstants";

class CompanyApi {
    static createCompany(company) {
        let request = {
            ...DEFAULT_REST_PARAMS_POST,
            body: JSON.stringify(company)
        }
        return handleApiFetchPOST(REST_ROOT_ENDPOINT + CREATE_COMPANY, request);
    }
}

export default CompanyApi;