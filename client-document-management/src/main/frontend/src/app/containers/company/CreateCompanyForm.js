import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextInputComponent from "../../components/integral/TextInputComponent";
import ButtonComponent from "../../components/integral/ButtonComponent";

export class CreateCompanyForm extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-lg-6 offset-lg-3">
                <h1>Create Company</h1>
                <div className="row">
                    <div className="col-lg"><TextInputComponent label="companyName"/></div>
                    <div className="col-lg"><TextInputComponent label="companyNo"/></div>
                </div>

                <div className="row">
                    <div className="col-lg"><TextInputComponent label="country"/></div>
                    <div className="col-lg"><TextInputComponent label="city"/></div>
                </div>

                <div className="row">
                    <div className="col-lg"><TextInputComponent label="yearOfEstablishment"/></div>
                    <div className="col-lg"><TextInputComponent label="business"/></div>
                </div>
                <div className="row">
                    <div className="col-lg"><TextInputComponent label="phone"/></div>
                    <div className="col-lg"><TextInputComponent label="email"/></div>
                </div>
                <div className="row">
                    <div className="col-lg-6"></div>
                    <div className="col-lg-6"><ButtonComponent label="Submit"/></div>
                </div>
            </div>
        );
    }

}

CreateCompanyForm.PropTypes = {}
export default (CreateCompanyForm);