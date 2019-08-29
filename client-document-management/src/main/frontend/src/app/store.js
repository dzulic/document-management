import {applyMiddleware, compose, createStore} from "redux";
import {browserHistory} from "react-router";
import {routerMiddleware, syncHistoryWithStore} from "react-router-redux";
import createSagaMiddleware from "redux-saga";
import freeze from "redux-freeze";
import {reducers} from "./reducers/index";
import {sagas} from "./sagas/index";
import thunk from 'redux-thunk';
import {loadTranslations, setLocale, syncTranslationWithStore} from 'react-redux-i18n';
import {createBrowserHistory} from 'history';
import {i18n} from "./utils/i18n";

// add the middlewares
let middlewares = [];

// add the router middleware
middlewares.push(routerMiddleware(browserHistory));

// add the saga middleware
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

// used in i18n
middlewares.push(thunk);

// add the freeze dev middleware
if (process.env.NODE_ENV !== 'production') {
    middlewares.push(freeze);
}

// apply the middleware
let middleware = applyMiddleware(...middlewares);

// add the redux dev tools
if (process.env.NODE_ENV !== 'production' && window.devToolsExtension) {
    middleware = compose(middleware, window.devToolsExtension());
}

function saveToLocalStorage(state) {
    localStorage.setItem('state', JSON.stringify(state));
}
function getFromLocalStorage() {
    let state = localStorage.getItem('state');
    if (!state) {
        return undefined;
    }
    return JSON.parse(state);
}
const persistentState = getFromLocalStorage();
// create the store
const store = createStore(reducers,
    persistentState,
    middleware);

store.subscribe(() => saveToLocalStorage(store.getState()))
const history = syncHistoryWithStore(createBrowserHistory(), store);
sagaMiddleware.run(sagas);

// used in i18n
syncTranslationWithStore(store);
store.dispatch(loadTranslations(i18n));
store.dispatch(setLocale('en'));
// export

export {store, history};
