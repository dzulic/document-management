import {DEFAULT_REST_PARAMS_POST} from "./applicationServerConstants";
import 'whatwg-fetch';
import {handleApiFetchGET, handleApiFetchPOST, REST_ROOT_ENDPOINT} from "../utils/apiUtil";

const LOGIN_USER = "userWS/login"
const LOGOUT_USER = "userWS/logout"

class LoginApi {

    static login(user) {
        let request = {
            ...DEFAULT_REST_PARAMS_POST,
            body: JSON.stringify(user)
        }
        return handleApiFetchPOST(REST_ROOT_ENDPOINT + LOGIN_USER, request);
    }

    static logout() {
        return handleApiFetchGET(REST_ROOT_ENDPOINT + LOGOUT_USER, '');
    }
}

export default LoginApi;