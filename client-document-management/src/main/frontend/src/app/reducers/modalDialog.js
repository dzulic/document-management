import {CLOSE_MODAL_DIALOG, OPEN_ADD_ITEM_MODAL} from "../utils/actionTypes";

export default function modalDialog(state = {}, action) {
    switch (action.type) {
        case OPEN_ADD_ITEM_MODAL:
            return {showAddModal: true, addItem: true};
        case CLOSE_MODAL_DIALOG:
            return {showAddModal: false};
        default:
            return state;
    }
}