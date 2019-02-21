import React, {Component} from 'react';
import ButtonComponent from "../../components/integral/ButtonComponent";
import {reduxForm} from "redux-form";

export class LoginForm extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <title>Login</title>
                <div>
                    <p>Username</p>
                    <input type="text"/>
                    <p>Password</p>
                    <input type="text"/>
                </div>
                <ButtonComponent label="Login"/>
            </div>
        );
    }
}

export default (reduxForm({
    form: "AppForm",
    destroyOnUnmount: true,
})(LoginForm));