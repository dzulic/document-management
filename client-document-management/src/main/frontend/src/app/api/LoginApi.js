import 'whatwg-fetch';
import {handleApiFetchGET, REST_ROOT_ENDPOINT} from "../utils/apiUtil";
import {DEFAULT_REST_PARAMS_GET} from "./applicationServerConstants";

const LOGIN_USER = "userWS/loginUser";
const LOGOUT_USER = "userWS/logoutUser";

class LoginApi {

    static login(user) {
        try {
            let request = {
                ...DEFAULT_REST_PARAMS_GET,
                body: JSON.stringify(user)
            }

            return handleApiFetchGET(REST_ROOT_ENDPOINT + LOGIN_USER, request);
        } catch (e) {
            console.log(e);
        }
    }
    static logout() {
        return handleApiFetchGET(REST_ROOT_ENDPOINT + LOGOUT_USER, '');
    }
}

export default LoginApi;