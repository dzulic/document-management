import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextInputComponent from "../../components/integral/TextInputComponent";
import ButtonComponent from "../../components/integral/ButtonComponent";

export class CreateUserForm extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-lg-6 offset-lg-3">
                <h1>Create User</h1>
                <div className="row">
                    <div className="col-lg"><TextInputComponent label="username"/></div>
                    <div className="col-lg"><TextInputComponent label="password"/></div>
                </div>

                <div className="row">
                    <div className="col-lg"><TextInputComponent label="name"/></div>
                    <div className="col-lg"><TextInputComponent label="lastName"/></div>
                </div>

                <div className="row">
                    <div className="col-lg"><TextInputComponent label="email"/></div>
                    <div className="col-lg"><TextInputComponent label="mobilePhone"/></div>
                </div>
                <div className="row">
                    <div className="col-lg"><TextInputComponent label="company"/></div>
                    <div className="col-lg"><TextInputComponent label="country"/></div>
                </div>
                <div className="row">
                    <div className="col-lg"><TextInputComponent label="team"/></div>
                    <div className="col-lg"><TextInputComponent label="position"/></div>
                </div>
                <div className="row">
                    <div className="col-lg-6"><TextInputComponent label="employeeID"/></div>
                </div>
                <div className="row">
                    <div className="col-lg-6"><ButtonComponent label="Submit"/></div>
                </div>
            </div>
        );
    }

}

CreateUserForm.PropTypes = {}
export default (CreateUserForm);