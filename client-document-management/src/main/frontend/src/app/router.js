/**
 * Created by krsticn on 11/01/2017.
 */

import React from "react";
import {history} from "./store.js";
import {Route, Router} from "react-router";
import Home from "./containers/Home"
import App from "./containers/App";


const router =
    <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
        <App>
            <Route exact path={"/"} component={Home}/>
        </App>
    </Router>;

// export
export {router};
