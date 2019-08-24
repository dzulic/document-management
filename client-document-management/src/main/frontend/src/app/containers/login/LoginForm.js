import React, {Component} from 'react';
import TextInputComponent from "../../components/integral/TextInputComponent";
import {loginUser} from "../../actions/actions";
import {I18n} from "react-redux-i18n";
import {Field, getFormValues, reduxForm} from "redux-form";
import {ButtonComponent} from "../../components/integral/ButtonComponent";
import {connect} from "react-redux";

export class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        const {dispatch, formValues, type} = this.props;
        dispatch(loginUser({
            user: {
                userName: formValues.userName,
                password: formValues.password
            }
        }))
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className={'login'}>
                <div>
                    <h1>{I18n.t("application.message.login")}</h1>
                    <Field name="userName"
                           label="userName"
                           component={TextInputComponent}/>
                    <Field name="password"
                           label="password"
                           component={TextInputComponent}/>
                    <ButtonComponent label="login" buttonType="submit"/>
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