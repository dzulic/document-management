/**
 * Created by krsticn on 11/01/2017.
 */

import React from "react";
import {history} from "./store.js";
import {IndexRoute, Route, Router} from "react-router";
import App from "./containers/App";
import Home from "./containers/Home"


const router =
    <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
        <Route path={"/"} component={App}>
            <IndexRoute component={Home}/>
        </Route>
    </Router>;

// export
export {router};
