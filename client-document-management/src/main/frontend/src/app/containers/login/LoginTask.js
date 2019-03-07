import React, {Component} from 'react';
import {reduxForm} from "redux-form";
import {LoginForm} from "./LoginForm";

export class LoginTask extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <LoginForm/>
            </div>
        );
    }
}

export default (reduxForm({
    form: "AppForm",
    destroyOnUnmount: true,
})(LoginTask));