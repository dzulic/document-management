import React, {Component} from 'react';
import {getFormValues, reduxForm} from "redux-form";
import {LoginForm} from "./LoginForm";
import {loginUser} from "../../actions/actions";
import {connect} from "react-redux";

export class LoginTask extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        const {dispatch, formValues} = this.props;
        dispatch(loginUser({
            user: {
                username: formValues.username,
                password: formValues.password
            }
        }))
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <LoginForm/>
            </form>
        );
    }
}

const selector = getFormValues("AppForm");

function mapStateToProps(state) {
    return {
        formValues: selector(state)
    }
}

export default connect(mapStateToProps)(reduxForm({
    form: "AppForm",
    destroyOnUnmount: true,
})(LoginTask));
