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
                    <div className="col-lg"><TextInputComponent label="username" required={true}/></div>
                    <div className="col-lg"><TextInputComponent label="password" required={true}/></div>
                </div>

                <div className="row">
                    <div className="col-lg"><TextInputComponent label="name" required={true}/></div>
                    <div className="col-lg"><TextInputComponent label="lastName" required={true} /></div>
                </div>

                <div className="row">
                    <div className="col-lg"><TextInputComponent label="email" required={true} /></div>
                    <div className="col-lg"><TextInputComponent label="mobilePhone" required={true} /></div>
                </div>
                <div className="row">
                    <div className="col-lg"><TextInputComponent label="company" required={true} /></div>
                    <div className="col-lg"><TextInputComponent label="country" required={true} /></div>
                </div>
                <div className="row">
                    <div className="col-lg"><TextInputComponent label="team" required={true} /></div>
                    <div className="col-lg"><TextInputComponent label="position" required={true} /></div>
                </div>
                <div className="row">
                    <div className="col-lg-6"><TextInputComponent label="profession" required={true} /></div>
                    <div className="col-lg-6"><TextInputComponent label="employeeID" required={true} /></div>
                </div>
                <div className="row">
                    <div className="col-lg-6"></div>
                    <div className="col-lg-6"><ButtonComponent label="Submit"/></div>
                </div>
            </div>
        );
    }

}

CreateUserForm.propTypes = {}
export default (CreateUserForm);