import React, {Component} from 'react';
import CreateCompanyForm from "./CreateCompanyForm";
import {getFormValues, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {createCompany} from "../../actions/actions";

export class CreateCompanyTask extends Component {

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
            <form onSubmit={this.handleSubmit}>
                <CreateCompanyForm/>
            </form>
        );
    }

}

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
})(CreateCompanyTask));