import React, {Component} from 'react';
import ButtonComponent from "../../components/integral/ButtonComponent";
import {Field, getFormValues, reduxForm} from "redux-form";
import TextInputComponent from "../../components/integral/TextInputComponent";
import {I18n} from "react-redux-i18n";
import {connect} from "react-redux";
import {loginUser} from "../../actions/actions";

export class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        const {dispatch, formValues} = this.props;
        dispatch(loginUser({
            user: {
                userName: formValues.userName,
                password: formValues.password
            }
        }))
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="col-lg-12 login">
                    <div className="col-lg-2 offset-lg-5">
                        <div className="row">
                            <h1>{I18n.t("application.label.login")}</h1>
                        </div>
                        <div className="row">
                            <Field name="userName"
                                   label="userName"
                                   component={TextInputComponent}/>
                        </div>
                        <div className="row">
                            <Field name="password"
                                   label="password"
                                   component={TextInputComponent}/>
                        </div>
                        <div className="col-lg-3 offset-4">
                            <div className="row">
                                <ButtonComponent label="login" buttonType="submit"/>
                            </div>
                        </div>

                    </div>
                </div>
            </form>
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