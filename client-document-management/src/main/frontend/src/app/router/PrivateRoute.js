import {Route} from "react-router-dom";
import React, {Component} from "react";
import {Redirect} from "react-router";

export default function PrivateRoute({component: Component, path, params, ...rest}) {
    return (
        <Route
            {...rest}
            render={(props) => {
                if (params) {
                    return <Component  {...props}/>;
                } else if (!params) {
                    return <Redirect to="login"/>
                }
                return null;
            }}/>
    )
}
