import {
    ADD_EDIT_APP_PROP_STORE,
    CLOSE_MODAL_DIALOG,
    CREATE_USER,
    LOGIN,
    OPEN_ADD_ITEM_MODAL,
    CREATE_COMPANY, CREATE_DOCUMENT
} from "../utils/actionTypes";

export const loginUser = (property) => ({
    type: LOGIN,
    property
});

export const createUser = (property) => ({
    type: CREATE_USER,
    property
});

export const createCompany = (property) => ({
    type: CREATE_COMPANY,
    property
});

export const createDocument = (property) => ({
    type: CREATE_DOCUMENT,
    property
});

export const openAddItemModal = () => ({
    type: OPEN_ADD_ITEM_MODAL,
});

export const closeItemModal = () => ({
    type: CLOSE_MODAL_DIALOG,
});

export const addEditAppProperty = (property) => ({
    type: ADD_EDIT_APP_PROP_STORE,
    property
});
