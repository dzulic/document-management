import React, {Component} from 'react';
import ButtonComponent from "../../components/integral/ButtonComponent";
import {reduxForm} from "redux-form";
import TextInputComponent from "../../components/integral/TextInputComponent";

export class LoginForm extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-lg-12">
                <div className="col-lg-2 offset-lg-5">
                    <h1>Login</h1>
                    <TextInputComponent label="username"/>
                    <TextInputComponent label="password"/>
                    <div className="col-lg-3 offset-4">
                        <ButtonComponent label="login"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default (reduxForm({
    form: "AppForm",
    destroyOnUnmount: true,
})(LoginForm));