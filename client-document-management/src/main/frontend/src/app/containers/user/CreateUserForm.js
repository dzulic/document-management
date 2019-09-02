import React, {Component} from 'react';
import TextInputComponent from "../../components/integral/TextInputComponent";
import ButtonComponent from "../../components/integral/ButtonComponent";
import {Field, getFormValues, reduxForm} from 'redux-form'
import {connect} from "react-redux";
import DropDownComponent from "../../components/integral/DropDownComponent";
import {requiredProps} from "../../components/modals/AddNewItemModal";
import {COMPANIES_SESSION, USER_LOGGED_SESSION} from "../../utils/Constants";

export const buttonOptions = {
    selectOptions: []
};
export const CompanyProps = {
    ...buttonOptions,
    ...requiredProps,
    label: "company",
    formName: "UserForm"
};
export const UserRoleProps = {
    label: "userRole",
    ...requiredProps,
    selectOptions: [],
    formName: "UserForm"
};


export class CreateUserForm extends Component {


    constructor(props) {
        super(props);
    }

    render() {
        let companies = JSON.parse(localStorage.getItem(COMPANIES_SESSION));
        let logged = localStorage.getItem(USER_LOGGED_SESSION);

        if (logged.userRole === "ADMIN") {
            UserRoleProps.selectOptions.push([
                {label: "SUPER", value: "SUPER"},
                {label: "SIMPLE", value: "SIMPLE"}])
        } else if (logged.userRole === "SUPER") {
            UserRoleProps.selectOptions.push({label: "SIMPLE", value: "SIMPLE"});
        }

        if (companies) {
            CompanyProps.selectOptions = companies;
        }

        return (
            <div className="create-user">
                <h1>Create User</h1>
                <div className="row">
                    <Field name="userName"
                           label="userName"
                           component={TextInputComponent}
                           required/>
                    <Field name="password"
                           label="password"
                           component={TextInputComponent}
                           required/>
                </div>
                <div className="row">
                    <Field name="name"
                           label="name"
                           component={TextInputComponent}
                           required/>
                    <Field name="lastName"
                           label="lastName"
                           component={TextInputComponent}
                           required/>
                </div>

                <div className="row">
                    <Field name="email"
                           label="email"
                           component={TextInputComponent}/>
                    <Field name="mobilePhone"
                           label="mobilePhone"
                           component={TextInputComponent}/>
                </div>
                <div className="row">
                    <Field name="company"
                           label="company"
                           baseComponentConfig={CompanyProps}
                           component={DropDownComponent}
                    />
                    <Field name="employeeID"
                           label="employeeID"
                           maxLength={7}
                           minLength={2}
                           component={TextInputComponent}
                           required/>
                </div>
                <div className="row">
                    <Field name="userRole"
                           label="userRole"
                           baseComponentConfig={UserRoleProps}
                           component={DropDownComponent}/>
                    <Field name="position"
                           label="position"
                           component={TextInputComponent}/>
                </div>
                <ButtonComponent label="Submit"/>
            </div>
        );
    }

}

const selector = getFormValues("UserForm");
CreateUserForm.propTypes = {};

function mapStateToProps(state) {
    return {
        formValues: selector(state),
    }
}

export default connect(mapStateToProps)(reduxForm({
    form: 'UserForm',
    destroyOnUnmount: false,
    enableReinitialize: true,
})(CreateUserForm));
