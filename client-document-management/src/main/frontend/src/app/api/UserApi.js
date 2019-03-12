const CREATE_USER = "userWS/createUser";
import {handleApiFetchGET, handleApiFetchPOST, REST_ROOT_ENDPOINT} from "../utils/apiUtil";
import {DEFAULT_REST_PARAMS_POST} from "./applicationServerConstants";

class UserApi {
    static createUser(user) {
        let request = {
            ...DEFAULT_REST_PARAMS_POST,
            body: JSON.stringify(user)
        }
        return handleApiFetchPOST(REST_ROOT_ENDPOINT + CREATE_USER, request);
    }
}

export default UserApi;