import React, {Component} from 'react';
import {connect} from "react-redux";
import {getFormValues, reduxForm} from "redux-form";
import UploadDocumentForm from "./UploadDocumentForm";
import PropTypes from "prop-types";

export class UploadDocumentTask extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {templateId} = this.props;
        return (
            <form>
                <h1>Upload a file</h1>
                <UploadDocumentForm templateId={templateId}/>
            </form>
        );
    }

}

UploadDocumentTask.propTypes = {
    templateId: PropTypes.string
};

const selector = getFormValues("AppForm");

function mapStateToProps(state) {
    return {
        formValues: selector(state)
    }
}
export default connect(mapStateToProps)
(reduxForm({
    form: "AppForm",
    destroyOnUnmount: false,
})(UploadDocumentTask));
