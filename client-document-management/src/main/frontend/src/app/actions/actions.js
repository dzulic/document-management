import {
    ADD_EDIT_APP_PROP_STORE,
    CLOSE_MODAL_DIALOG,
    CREATE_COMPANY,
    CREATE_DOCUMENT,
    CREATE_TEMPLATE,
    CREATE_USER,
    FETCH_COMPANIES,
    LOGIN,
    OPEN_ADD_ITEM_MODAL,
    SAVE_DOCUMENT,
    SHOW_WAITING_MODAL
} from "../utils/actionTypes";

export const createTemplateDocument = (payload) => ({
    type: CREATE_TEMPLATE,
    payload
});
export const saveDocument = (payload) => ({
    type: SAVE_DOCUMENT,
    payload
});

export const loginUser = (property) => ({
    type: LOGIN,
    property
});

export const fetchCompanies = () => ({
    type: FETCH_COMPANIES,
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

export const showWaitingDialog = (property) => ({
    type: SHOW_WAITING_MODAL,
    showWaitingModal: property
});