import {applyMiddleware, compose, createStore} from "redux";
import {routerMiddleware, syncHistoryWithStore} from "react-router-redux";
import createSagaMiddleware from "redux-saga";
import freeze from "redux-freeze";
import {reducers} from "./reducers/index";
import {sagas} from "./sagas/index";
import thunk from 'redux-thunk';
import {loadTranslations, setLocale, syncTranslationWithStore} from 'react-redux-i18n';
import {i18n} from "./utils/i18n";
import {createBrowserHistory} from "history";

// add the middlewares
let middlewares = [];
const browserHistory = createBrowserHistory()

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

const store = createStore(reducers,
    middleware);

const history = syncHistoryWithStore(browserHistory, store);
sagaMiddleware.run(sagas);

// used in i18n
syncTranslationWithStore(store);
store.dispatch(loadTranslations(i18n));
store.dispatch(setLocale('en'));
// export

export {store, history};
