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
    OPEN_DOCUMENT,
    OPEN_FILL_DOCUMENT_MODAL,
    OPEN_TEMPLATE,
    SAVE_DOCUMENT,
    SEARCH_DOCUMENT,
    SEARCH_TEMPLATE,
    SHOW_ERROR_MODAL,
    SHOW_UPLOAD_DIALOG,
    SHOW_WAITING_MODAL
} from "../utils/actionTypes";

export const searchTemplate = (payload) => ({
    type: SEARCH_TEMPLATE,
    payload
});
export const searchDocument = (payload) => ({
    type: SEARCH_DOCUMENT,
    payload
});
export const openDocument = (payload) => ({
    type: OPEN_DOCUMENT,
    payload
});
export const openTemplate = (payload) => ({
    type: OPEN_TEMPLATE,
    payload
});

export const createTemplateDocument = (payload) => ({
    type: CREATE_TEMPLATE,
    payload
});
export const saveDocument = (payload) => ({
    type: SAVE_DOCUMENT,
    payload
});

export const loginUser = (payload) => ({
    type: LOGIN,
    payload
});

export const fetchCompanies = () => ({
    type: FETCH_COMPANIES,
});

export const createUser = (payload) => ({
    type: CREATE_USER,
    payload
});

export const createCompany = (payload) => ({
    type: CREATE_COMPANY,
    payload
});

export const createDocument = (payload) => ({
    type: CREATE_DOCUMENT,
    payload
});

export const openAddItemModal = (value) => ({
    type: OPEN_ADD_ITEM_MODAL,
    value
});

export const openFillTemplateModal = (payload) => ({
    type: OPEN_FILL_DOCUMENT_MODAL,
    doc: payload
});

export const closeItemModal = () => ({
    type: CLOSE_MODAL_DIALOG,
});

export const showWaitingDialog = (payload) => ({
    type: SHOW_WAITING_MODAL,
    showWaitingModal: payload
});

export const addEditAppProperty = (payload) => ({
    type: ADD_EDIT_APP_PROP_STORE,
    payload
});

export const showErrorDialog = (message, messageBody) => ({
    type: SHOW_ERROR_MODAL,
    message,
    messageBody
});
export const showUploadDialog = (message, templateId) => ({
    type: SHOW_UPLOAD_DIALOG,
    templateId
});
