import React, {Component} from 'react';
import CreateUserForm from "./CreateUserForm";
import {createUser} from "../../actions/actions"
import {connect} from "react-redux";
import {getFormValues, reduxForm} from "redux-form";

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
            <form onSubmit={handleSubmit(this.onSubmit)}>
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
