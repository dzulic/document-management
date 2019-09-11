import {
    CLOSE_MODAL_DIALOG,
    OPEN_ADD_ITEM_MODAL,
    OPEN_DOCUMENT_MODAL,
    OPEN_FILL_DOCUMENT_MODAL,
    SHOW_ERROR_MODAL,
    SHOW_UPLOAD_DIALOG,
    SHOW_WAITING_MODAL
} from "../utils/actionTypes";

export default function modalDialog(state = {}, action) {
    switch (action.type) {
        case OPEN_FILL_DOCUMENT_MODAL:
            return {showModal: (action.doc !== undefined), fillDocument: action.doc};
        case SHOW_WAITING_MODAL:
            return {showModal: action.showWaitingModal, showWaitingModal: action.showWaitingModal};
        case OPEN_ADD_ITEM_MODAL:
            return {showModal: action.value, showAddModal: action.value, addItem: action.value};
        case OPEN_DOCUMENT_MODAL:
            return {showModal: action.value};
        case SHOW_UPLOAD_DIALOG:
            return {showModal: true, templateId: action.templateId};
        case SHOW_ERROR_MODAL:
            return {showModal: true, error: {message: action.message, messageBody: action.messageBody}};
        case CLOSE_MODAL_DIALOG:
            return {showModal: false};
        default:
            return state;
    }
}