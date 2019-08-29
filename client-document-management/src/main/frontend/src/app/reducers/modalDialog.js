import {CLOSE_MODAL_DIALOG, OPEN_ADD_ITEM_MODAL, SHOW_WAITING_MODAL} from "../utils/actionTypes";

export default function modalDialog(state = {}, action) {
    switch (action.type) {
        case SHOW_WAITING_MODAL:
            return {showModal: true, showWaitingModal: true, waiting: {message: "Please wait"}};
        case OPEN_ADD_ITEM_MODAL:
            return {showAddModal: true, addItem: true};
        case CLOSE_MODAL_DIALOG:
            return {showModal: false};
        default:
            return state;
    }
}