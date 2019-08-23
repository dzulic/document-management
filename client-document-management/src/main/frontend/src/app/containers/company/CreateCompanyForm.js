import React, {Component} from 'react';
import TextInputComponent from "../../components/integral/TextInputComponent";
import ButtonComponent from "../../components/integral/ButtonComponent";
import {connect} from "react-redux";
import {Field, getFormValues, reduxForm} from "redux-form";
import {createCompany} from "../../actions/actions";

export class CreateCompanyForm extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        const {dispatch, formValues} = this.props;
        dispatch(createCompany({
            company: {
                ...formValues
            }
        }));
    }
    render() {
        return (
            <div className="col-lg-6 offset-lg-3">
                <h1>Create Company</h1>
                <div className="row">
                    <div className="col-4 offset-2">
                        <Field name="companyName"
                               label="companyName"
                               component={TextInputComponent}/>
                    </div>
                    <div className="col-4">
                        <Field name="companyId"
                               label="companyId"
                               component={TextInputComponent}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-4 offset-2">
                        <Field name="country"
                               label="country"
                               component={TextInputComponent}/>
                    </div>
                    <div className="col-4">
                        <Field name="city"
                               label="city"
                               component={TextInputComponent}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-4 offset-2">
                        <Field name="yearOfEstablishment"
                               label="yearOfEstablishment"
                               component={TextInputComponent}/>
                    </div>
                    <div className="col-4">
                        <Field name="business"
                               label="business"
                               component={TextInputComponent}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 offset-2">
                        <Field name="phone"
                               label="phone"
                               component={TextInputComponent}/>
                    </div>
                    <div className="col-4">
                        <Field name="email"
                               label="email"
                               component={TextInputComponent}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6"></div>
                    <div className="col-lg-6"><ButtonComponent buttonType="submit" label="Submit"/></div>
                </div>
            </div>
        );
    }

}

CreateCompanyForm.propTypes = {}
const selector = getFormValues("CompanyForm");

function mapStateToProps(state) {
    return {
        formValues: selector(state),
    }
}


export default connect(mapStateToProps)
(reduxForm({
    form: "CompanyForm",
    destroyOnUnmount: true,
})(CreateCompanyForm));