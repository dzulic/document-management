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
            <div className="col-12">
                <h1>Create User</h1>
                <div className="row">
                    <div className="col-4 offset-2">
                        <Field name="username"
                               label="username"
                               component={TextInputComponent}/>
                    </div>
                    <div className="col-4">
                        <Field name="password"
                               label="password"
                               component={TextInputComponent}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-4 offset-2">
                        <Field name="name"
                               label="name"
                               component={TextInputComponent}/>
                    </div>
                    <div className="col-4">
                        <Field name="lastName"
                               label="lastName"
                               component={TextInputComponent}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-4 offset-2">
                        <Field name="email"
                               label="email"
                               component={TextInputComponent}/>
                    </div>
                    <div className="col-4">
                        <Field name="mobilePhone"
                               label="mobilePhone"
                               component={TextInputComponent}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 offset-2">
                        <Field name="company"
                               label="company"
                               component={TextInputComponent}/>
                    </div>
                    <div className="col-4">
                        <Field name="country"
                               label="country"
                               component={TextInputComponent}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 offset-2">
                        <Field name="team"
                               label="team"
                               component={TextInputComponent}/>
                    </div>
                    <div className="col-4">
                        <Field name="position"
                               label="position"
                               component={TextInputComponent}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 offset-2">
                        <Field name="profession"
                               label="profession"
                               component={TextInputComponent}/>
                    </div>
                    <div className="col-4">
                        <Field name="employeeID"
                               label="employeeID"
                               component={TextInputComponent}/>
                    </div>
                </div>
                <div className="col-12">
                    <div className="col-4 offset-4"><ButtonComponent label="Submit"/></div>
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
