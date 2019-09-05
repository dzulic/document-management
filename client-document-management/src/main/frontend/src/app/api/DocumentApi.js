import {USER_LOGGED_SESSION} from "../utils/Constants";
import {handleApiFetchPOST, REST_ROOT_ENDPOINT} from "../utils/apiUtil";
import {DEFAULT_REST_PARAMS_POST} from "./applicationServerConstants";

const GET_DOCUMENT = "documentWS/getDocument";
const CREATE_DOCUMENT = "documentWS/createDocument";
const SEARCH_DOCUMENT = "documentWS/searchDocument";

class DocumentApi {
    static saveDocuments(document) {
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

    static searchDocument(document) {
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
        return handleApiFetchPOST(REST_ROOT_ENDPOINT + SEARCH_DOCUMENT, request);
    }

    static getDocument(document) {
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
        return handleApiFetchPOST(REST_ROOT_ENDPOINT + GET_DOCUMENT, request);
    }

}

export default DocumentApi;