import {USER_LOGGED_SESSION} from "../utils/Constants";
import {handleApiFetchPOST, REST_ROOT_ENDPOINT} from "../utils/apiUtil";
import {DEFAULT_REST_PARAMS_POST} from "./applicationServerConstants";

const CREATE_USER = "userWS/createUser";

class UserApi {
    static createUser(user) {
        let defaultrestparamspost = DEFAULT_REST_PARAMS_POST;
        let logged = JSON.parse(localStorage.getItem(USER_LOGGED_SESSION));
        defaultrestparamspost.headers = {
            'Content-Type': 'application/json',
            Authorization: 'Basic ' + window.btoa(logged.userName + ":" + logged.password),
        };
        let request = {
            ...defaultrestparamspost,
            body: JSON.stringify(user)
        };
        return handleApiFetchPOST(REST_ROOT_ENDPOINT + CREATE_USER, request);
    }
}

export default UserApi;