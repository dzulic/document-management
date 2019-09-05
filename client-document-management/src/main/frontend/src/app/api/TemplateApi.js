import {USER_LOGGED_SESSION} from "../utils/Constants";
import {handleApiFetchPOST, REST_ROOT_ENDPOINT} from "../utils/apiUtil";
import {DEFAULT_REST_PARAMS_POST} from "./applicationServerConstants";

const CREATE_DOCUMENT = "templateWS/createTemplate";
const GET_TEMPLATE = "templateWS/getTemplate";
const SEARCH_TEMPLATE = "templateWS/searchTemplate";

class TemplateApi {
    static createTemplate(document) {
        let defaultrestparamspost = DEFAULT_REST_PARAMS_POST;
        let user = JSON.parse(localStorage.getItem(USER_LOGGED_SESSION));
        defaultrestparamspost.headers = {
            'Content-Type': 'application/json',
            Authorization: 'Basic ' + window.btoa(user.userName + ":" + user.password),
        };

        let request = {
            ...defaultrestparamspost,
            body: JSON.stringify(document)
        };
        return handleApiFetchPOST(REST_ROOT_ENDPOINT + CREATE_DOCUMENT, request);
    }

    static getTemplate(template) {
        let defaultrestparamspost = DEFAULT_REST_PARAMS_POST;
        let user = JSON.parse(localStorage.getItem(USER_LOGGED_SESSION));
        defaultrestparamspost.headers = {
            'Content-Type': 'application/json',
            Authorization: 'Basic ' + window.btoa(user.userName + ":" + user.password),
        };

        let request = {
            ...defaultrestparamspost,
            body: JSON.stringify(template)
        };
        return handleApiFetchPOST(REST_ROOT_ENDPOINT + GET_TEMPLATE, request);
    }

    static searchTemplate(template) {
        console.log(template);
        let defaultrestparamspost = DEFAULT_REST_PARAMS_POST;
        let user = JSON.parse(localStorage.getItem(USER_LOGGED_SESSION));
        defaultrestparamspost.headers = {
            'Content-Type': 'application/json',
            Authorization: 'Basic ' + window.btoa(user.userName + ":" + user.password),
        };

        let request = {
            ...defaultrestparamspost,
            body: JSON.stringify(template)
        };
        return handleApiFetchPOST(REST_ROOT_ENDPOINT + SEARCH_TEMPLATE, request);
    }
}

export default TemplateApi;