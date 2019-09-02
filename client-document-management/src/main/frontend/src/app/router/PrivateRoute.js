import {Route} from "react-router-dom";
import React, {Component} from "react";
import {Redirect} from "react-router";
import {USER_LOGGED_SESSION} from "../utils/Constants";

export default function PrivateRoute({component: Component, path, params, ...rest}) {
    if (path === '/logout') {
        localStorage.removeItem(USER_LOGGED_SESSION);
        localStorage.clear();
    }
    let user = localStorage.getItem(USER_LOGGED_SESSION);
    return (
        <Route
            {...rest}
            render={(props) => {
                if (user) {
                    return <Component  {...props}/>;
                } else if (!user) {
                    return <Redirect to="login"/>
                }
                return null;
            }}/>
    )
}
