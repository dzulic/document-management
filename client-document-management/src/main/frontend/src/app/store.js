
import {createStore, applyMiddleware, compose} from "redux";
import {browserHistory} from "react-router";
import {syncHistoryWithStore, routerMiddleware} from "react-router-redux";
import createSagaMiddleware from "redux-saga";
import freeze from "redux-freeze";
import {reducers} from "./reducers/index";
import {sagas} from "./sagas/index";
import thunk from 'redux-thunk';
import {syncTranslationWithStore} from 'react-redux-i18n';
import { createBrowserHistory } from 'history';

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

// create the store
const store = createStore(reducers, middleware);
const history = syncHistoryWithStore(createBrowserHistory(), store);
sagaMiddleware.run(sagas);

// used in i18n
syncTranslationWithStore(store)

// export
export {store, history};
