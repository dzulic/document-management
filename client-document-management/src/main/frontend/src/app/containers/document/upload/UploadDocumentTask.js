import React, {Component} from 'react';
import {connect} from "react-redux";
import {getFormValues, reduxForm} from "redux-form";
import UploadDocumentForm from "./UploadDocumentForm";

export class UploadDocumentTask extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form>
                <h1>Upload a file</h1>
                <UploadDocumentForm/>
            </form>
        );
    }

}

UploadDocumentTask.propTypes = {}
const selector = getFormValues("DocForm");

function mapStateToProps(state) {
    return {
        formValues: selector(state)
    }
}
export default connect(mapStateToProps)
(reduxForm({
    form: "DocForm",
    destroyOnUnmount: true,
})(UploadDocumentTask));
