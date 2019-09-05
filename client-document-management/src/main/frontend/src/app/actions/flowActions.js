import * as types from "../utils/actionTypes"

export const addEditAppProperty = (payload) => ({
    type: types.ADD_EDIT_APP_PROP_STORE,
    payload
});

export const setRedirectUrl = (payload) => ({
    type: types.SET_REDIRECT_URL,
    payload
})