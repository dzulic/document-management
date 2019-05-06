import {ADD_EDIT_APP_PROP_STORE, CLEAR_ALL_APP_PROP_STORE, REMOVE_APP_PROP_STORE} from "../utils/actionTypes";

export default function application(state = [], action) {
    const property = action.property;
    switch (action.type) {

        case ADD_EDIT_APP_PROP_STORE:
            var edit = state.filter(function (stateProperty) {
                return stateProperty.key === property.key;
            })[0];

            if (!edit) {
                return [...state, property];
            } else {
                return state.map(stateProperty =>
                    stateProperty.key === property.key ? {...action.property} : stateProperty
                );
            }

        case REMOVE_APP_PROP_STORE:
            return state.filter(function (stateProperty) {
                    return stateProperty.key !== property.key
                }
            );

        case CLEAR_ALL_APP_PROP_STORE:
            return [];

        default:
            return state;
    }
}