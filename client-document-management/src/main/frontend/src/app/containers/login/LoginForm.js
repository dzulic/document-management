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
                    <div className="row">
                        <h1>Login</h1>
                    </div>
                    <div className="row">
                        <TextInputComponent label="username"/>
                    </div>
                    <div className="row">
                        <TextInputComponent label="password"/>
                    </div>
                    <div className="col-lg-3 offset-4">
                        <div className="row">
                            <ButtonComponent label="login"/>
                        </div>
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