import * as types from "../utils/actionTypes"

export const addEditAppProperty = (property) => ({
    type: types.ADD_EDIT_APP_PROP_STORE,
    property
});

export const setRedirectUrl = (property) => ({
    type: types.SET_REDIRECT_URL,
    property
})