import React, {Component} from 'react';
import ButtonComponent from "../../components/integral/ButtonComponent";
import {Field, getFormValues, reduxForm} from "redux-form";
import TextInputComponent from "../../components/integral/TextInputComponent";
import {I18n} from "react-redux-i18n";
import {connect} from "react-redux";

export class LoginForm extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-lg-12 login">
                <div className="col-lg-2 offset-lg-5">
                    <div className="row">
                        <h1>{I18n.t("application.label.login")}</h1>
                    </div>
                    <div className="row">
                        <Field name="username"
                               label="username"
                               component={TextInputComponent}/>
                    </div>
                    <div className="row">
                        <Field name="password"
                               label="password"
                               component={TextInputComponent}/>
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

const selector = getFormValues("AppForm");

function mapStateToProps(state) {
    return {
        formValues: selector(state)
    }
}

export default connect(mapStateToProps)(reduxForm({
    form: "AppForm",
    destroyOnUnmount: true,
})(LoginForm));