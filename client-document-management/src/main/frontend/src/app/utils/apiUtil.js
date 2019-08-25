export const REST_ROOT_ENDPOINT = "http://localhost:10700/";
;
import {DEFAULT_REST_PARAMS_GET} from "../api/applicationServerConstants";

export function createGetParam(key, value, andParam) {
    if (value && String(value).trim()) {
        value = String(value).trim();
        value = encodeURIComponent(value);
        if (andParam) {
            return key + '=' + value + '&'
        } else {
            return key + '=' + value;
        }

    }
    return '';
}

export function createGetParams(params) {
    if (params) {
        let getParams = '';
        let size = Object.keys(params).length;
        for (var i = 0; i < size; i++) {
            let key = Object.keys(params)[i];
            let paramKey = params[key];
            if (i < size - 1) {
                getParams = getParams + createGetParam(key, paramKey, true);
            } else {
                getParams = getParams + createGetParam(key, paramKey, false);
            }
        }
        return getParams;
    }
}


export const handleApiFetchGET =
    console.log("LGET");
(restEndpoint) => fetch(restEndpoint, DEFAULT_REST_PARAMS_GET
).then(
    (response) =>
        handleServerResponse(response)
).then((responseJson) => {
    return responseJson;
}).catch((error) => {
    console.error(error);
    throw error;
});

export const handleApiFetchPOST =
    (restEndpoint, postRequest) => fetch(restEndpoint, postRequest
    ).then(
        (response) => {
            console.log("RESP", response);
            handleServerResponse(response)
        }
    ).then((responseJson) => {
        console.log("RESP J", responseJson);
        return responseJson;
    }).catch((error) => {
        console.error(error);
        throw error;
    });

const handleServerResponse =
    (response) => {
        /*        // console.log("handleServerResponse...response.status = " + response.status);
             if (response.status === 401 || response.status === 403) {
                 //redirect, as it has some dellay between redirection we will continue with return
                 window.location = "localhost:8082//" + 'login';
                 throw new Error("SESSION_TIMEOUT");
             } else if (response.status === 500) {
                 throw new Error("ERROR_CODE_GENERIC");
             }
             return response.json();*/
    };