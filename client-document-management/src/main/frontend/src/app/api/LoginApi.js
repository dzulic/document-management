import {DEFAULT_REST_PARAMS_POST, REST_ROOT_ENDPOINT} from "./applicationServerConstants";
import 'whatwg-fetch';
import {handleApiFetchGET, handleApiFetchPOST} from "../utils/apiUtil";

const LOGIN_USER = "loginWS/login"
const LOGOUT_USER = "loginWS/logout"

class LoginApi {

    static login(user) {
        let request = {
            ...DEFAULT_REST_PARAMS_POST,
            body: JSON.stringify(user)
        }
        return handleApiFetchPOST(LOGIN_USER, request);
    }

    static logout() {
        return handleApiFetchGET(LOGOUT_USER, '');
    }
}

export default LoginApi;