import {Route} from "react-router-dom";
import React, {Component} from "react";
import {Redirect} from "react-router";
import {USER_NAME_SESSION_ATTRIBUTE_NAME} from "../utils/Constants";

export default function PrivateRoute({component: Component, path, params, ...rest}) {
    if (path === '/logout') {
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, null);
    }
    let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
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
