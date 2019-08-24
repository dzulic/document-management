import React, {Component} from 'react';
import TextInputComponent from "../../components/integral/TextInputComponent";
import ButtonComponent from "../../components/integral/ButtonComponent";
import {Field, getFormValues, reduxForm} from 'redux-form'
import {connect} from "react-redux";
import DropDownComponent from "../../components/integral/DropDownComponent";
import {requiredProps} from "../../components/modals/AddNewItemModal";
import {getValueAppPropertyStore} from "../../utils/storeUtil";
import {COMPANIES} from "../../utils/Constants";

export const buttonOptions = {
    selectOptions: []
};
export const BtnTypeInputProps = {
    ...buttonOptions,
    ...requiredProps,
    label: "componentType",
    formName: "ItemForm"
};

export class CreateUserForm extends Component {


    constructor(props) {
        super(props);
    }

    render() {
        const {companies} = this.props;
        if (companies) {
            BtnTypeInputProps.selectOptions.push(companies);
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
                           baseComponentConfig={BtnTypeInputProps}
                           component={DropDownComponent}
                    />
                    <Field name="employeeID"
                           label="employeeID"
                           maxlength={7}
                           minLength={2}
                           component={TextInputComponent}
                           required/>
                </div>
                <div className="row">
                    <Field name="country"
                           label="country"
                           component={TextInputComponent}/>
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
        companies: getValueAppPropertyStore(state, COMPANIES),
    }
}

export default connect(mapStateToProps)(reduxForm({
    form: 'UserForm',
    destroyOnUnmount: false,
    enableReinitialize: true,
})(CreateUserForm));
