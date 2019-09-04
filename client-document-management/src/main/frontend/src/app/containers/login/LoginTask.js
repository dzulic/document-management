import React, {Component} from 'react';
import {getFormValues, reduxForm} from "redux-form";
import LoginForm from "./LoginForm";
import {connect} from "react-redux";

export class LoginTask extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <LoginForm/>
            </div>
        );
    }
}

const selector = getFormValues("LoginForm");

function mapStateToProps(state) {
    return {
        formValues: selector(state)
    }
}

export default connect(mapStateToProps)(reduxForm({
    form: "AppForm",
    destroyOnUnmount: true,
})(LoginTask));
