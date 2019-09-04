import React, {Component} from 'react';
import TextInputComponent from "../../components/integral/TextInputComponent";
import ButtonComponent from "../../components/integral/ButtonComponent";
import {connect} from "react-redux";
import {Field, getFormValues, reduxForm} from "redux-form";

export class CreateCompanyForm extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="create-company">
                <h1>Create Company</h1>
                <div className="row">
                    <Field name="companyName"
                           label="companyName"
                           component={TextInputComponent}
                           required/>
                    <Field name="companyId"
                           label="companyId"
                           component={TextInputComponent}
                           required
                           maxLength={6}/>

                </div>
                <div className="row">
                    <Field name="country"
                           label="country"
                           component={TextInputComponent}
                           required/>

                    <Field name="city"
                           label="city"
                           component={TextInputComponent}/>
                </div>

                <div className="row">
                    <Field name="yearOfEstablishment"
                           label="yearOfEstablishment"
                           component={TextInputComponent}/>

                    <Field name="business"
                           label="business"
                           component={TextInputComponent}/>
                </div>
                <div className="row">
                    <Field name="phone"
                           label="phone"
                           component={TextInputComponent}
                           required/>

                    <Field name="email"
                           label="email"
                           component={TextInputComponent}
                           required/>
                </div>
                <div className="row">
                    <ButtonComponent buttonType="submit" label="Submit"/>
                </div>
            </div>
        );
    }

}
const selector = getFormValues("AppForm");

function mapStateToProps(state) {
    return {
        formValues: selector(state),
    }
}


export default connect(mapStateToProps)
(reduxForm({
    form: "AppForm",
    destroyOnUnmount: false,
})(CreateCompanyForm));