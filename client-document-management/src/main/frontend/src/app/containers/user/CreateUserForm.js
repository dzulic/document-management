import React, {Component} from 'react';
import TextInputComponent from "../../components/integral/TextInputComponent";
import ButtonComponent from "../../components/integral/ButtonComponent";
import {Field, getFormValues, reduxForm} from 'redux-form'
import {connect} from "react-redux";

export class CreateUserForm extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-lg-6 offset-lg-3">
                <h1>Create User</h1>
                <div className="row">
                    <div className="col-lg">
                        <Field name="username"
                               label="username"
                               component={TextInputComponent}/>
                    </div>
                    <div className="col-lg">
                        <Field name="password"
                               label="password"
                               component={TextInputComponent}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg">
                        <Field name="name"
                               label="name"
                               component={TextInputComponent}/>
                    </div>
                    <div className="col-lg">
                        <Field name="lastName"
                               label="lastName"
                               component={TextInputComponent}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg">
                        <Field name="email"
                               label="email"
                               component={TextInputComponent}/>
                    </div>
                    <div className="col-lg">
                        <Field name="mobilePhone"
                               label="mobilePhone"
                               component={TextInputComponent}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg">
                        <Field name="company"
                               label="company"
                               component={TextInputComponent}/>
                    </div>
                    <div className="col-lg">
                        <Field name="country"
                               label="country"
                               component={TextInputComponent}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg">
                        <Field name="team"
                               label="team"
                               component={TextInputComponent}/>
                    </div>
                    <div className="col-lg">
                        <Field name="position"
                               label="position"
                               component={TextInputComponent}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <Field name="profession"
                               label="profession"
                               component={TextInputComponent}/>
                    </div>
                    <div className="col-lg-6">
                        <Field name="employeeID"
                               label="employeeID"
                               component={TextInputComponent}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6"></div>
                    <div className="col-lg-6"><ButtonComponent label="Submit"/></div>
                </div>
            </div>
        );
    }

}

const selector = getFormValues("UserForm");
CreateUserForm.propTypes = {}

function mapStateToProps(state) {
    return {
        formValues: selector(state)
    }
}

export default connect(mapStateToProps)(reduxForm({
    form: 'UserForm',
    fields: ['profession', 'employeeID'],
    destroyOnUnmount: false,
    enableReinitialize: true,
})(CreateUserForm));
