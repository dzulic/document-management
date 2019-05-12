import React, {Component} from 'react';
import CreateDocumentForm from "../../document/create/CreateDocumentForm";
import {connect} from "react-redux";
import {reduxForm} from "redux-form";
import {createDocument} from "../../../actions/actions";

export class CreateDocumentTask extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit() {
        const {dispatch, formValues} = this.props;
        dispatch(createDocument({
            document: formValues
        }))
    }

    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <CreateDocumentForm/>
            </form>
        );
    }

}

function mapStateToProps(state) {
    return {
        formValues: selector(state),
    }
}

export default connect(mapStateToProps)
(reduxForm({
    form: "AppForm",
    destroyOnUnmount: true,
})(CreateDocumentTask));