import React, {Component} from 'react';
import CreateUserForm from "./CreateUserForm";
import {createUser} from "../../actions/actions"
import {connect} from "react-redux";
import {getFormValues, reduxForm} from "redux-form";
import {getValueAppPropertyStore} from "../../utils/storeUtil";
import {COMPANIES} from "../../utils/Constants";

export class CreateUserTask extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit() {
        const {formValues, companies} = this.props;
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
const selector = getFormValues("AppForm");

function mapStateToProps(state) {
    return {
        formValues: selector(state),
        companies: getValueAppPropertyStore(state, COMPANIES)
    }
}

export default connect(mapStateToProps)(reduxForm({
    form: 'AppForm',
    destroyOnUnmount: false,
    enableReinitialize: true,
})(CreateUserTask));
