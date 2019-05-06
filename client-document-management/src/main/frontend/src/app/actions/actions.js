import {ADD_EDIT_APP_PROP_STORE, CLOSE_MODAL_DIALOG, CREATE_USER, OPEN_ADD_ITEM_MODAL} from "../utils/actionTypes";

export const createUser = (property) => ({
    type: CREATE_USER,
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
