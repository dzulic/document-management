import {ADD_EDIT_APP_PROP_STORE, CLEAR_ALL_APP_PROP_STORE, REMOVE_APP_PROP_STORE} from "../utils/actionTypes";

export default function application(state = [], action) {
    const payload = action.payload;
    switch (action.type) {
        case ADD_EDIT_APP_PROP_STORE:
            var edit = state.filter(function (stateProperty) {
                return stateProperty.key === payload.key;
            })[0];

            if (!edit) {
                return [...state, payload];
            } else {
                return state.map(stateProperty =>
                    stateProperty.key === payload.key ? {...action.payload} : stateProperty
                );
            }

        case REMOVE_APP_PROP_STORE:
            return state.filter(function (stateProperty) {
                    return stateProperty.key !== payload.key
                }
            );

        case CLEAR_ALL_APP_PROP_STORE:
            return [];

        default:
            return state;
    }
}