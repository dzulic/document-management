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
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleSubmit)}>
                <CreateCompanyForm/>
            </form>
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
    destroyOnUnmount: true,
})(CreateCompanyTask));