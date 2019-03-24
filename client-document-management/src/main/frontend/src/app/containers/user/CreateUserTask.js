import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CreateUserForm from "./CreateUserForm";
import * as constants from "../../utils/Constants";
import {createUser} from "../../actions/actions"
import {connect} from "react-redux";
import {reduxForm, change, Field, getFormValues, isValid, initialize} from "redux-form";

export class CreateUserTask extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit() {
        const {formValues, formValid} = this.props;
        this.props.dispatch(createUser(formValues));
    }

    render() {
        const {handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit)} className="container">
                <CreateUserForm/>
            </form>
        );
    }

}

CreateUserTask.propTypes = {}
const selector = getFormValues("UserForm");

function mapStateToProps(state) {
    return {
        formValues: selector(state)
    }
}

export default connect(mapStateToProps)(reduxForm({
    form: 'UserForm',
    destroyOnUnmount: false,
    enableReinitialize: true,
})(CreateUserTask));
