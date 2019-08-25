import React, {Component} from 'react';
import TextInputComponent from "../../components/integral/TextInputComponent";
import {loginUser} from "../../actions/actions";
import {I18n} from "react-redux-i18n";
import {Field, getFormValues, reduxForm} from "redux-form";
import {ButtonComponent} from "../../components/integral/ButtonComponent";
import {connect} from "react-redux";
import {getValueAppPropertyStore} from "../../utils/storeUtil";

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
        const {handleSubmit, error} = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleSubmit)} className={'login container'}>
                <div>
                    {error && I18n.t("application.message." + error)}
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
        formValues: selector(state),
        error: getValueAppPropertyStore(state, "error"),
    }
}

export default connect(mapStateToProps)(reduxForm({
    form: "LoginForm",
    destroyOnUnmount: true,
})(LoginForm));