/**
 * Created by krsticn on 11/01/2017.
 */

import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";

// main reducers
export const reducers = combineReducers({
    routing: routerReducer,
});
