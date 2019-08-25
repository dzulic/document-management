import 'whatwg-fetch';
import {handleApiFetchGET, handleApiFetchPOST, REST_ROOT_ENDPOINT} from "../utils/apiUtil";

const LOGIN_USER = "userWS/loginUser";
const LOGOUT_USER = "userWS/logoutUser";

class LoginApi {

    static login(user) {
        try {
            let request = {
                    method: "POST",
                    body: JSON.stringify(user),
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Basic ' + window.btoa(user.userName + ":" + user.password
                        ),
                        'Access-Control-Allow-Origin':
                            "*"
                    },
                }
            ;

            return handleApiFetchPOST(REST_ROOT_ENDPOINT + LOGIN_USER, request);
        } catch (e) {
            console.log(e);
        }
    }
    static logout() {
        return handleApiFetchGET(REST_ROOT_ENDPOINT + LOGOUT_USER, '');
    }
}

export default LoginApi;