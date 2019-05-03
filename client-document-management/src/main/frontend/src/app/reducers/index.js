import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import {reducer as reduxFormReducer} from "redux-form";
import {i18nReducer} from 'react-redux-i18n';

// main reducers
export const reducers = combineReducers({
    routing: routerReducer,
    form: reduxFormReducer,
    i18n: i18nReducer
});
