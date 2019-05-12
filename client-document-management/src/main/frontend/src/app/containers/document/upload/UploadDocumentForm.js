import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {I18n} from "react-redux-i18n";
import {connect} from "react-redux";
import {getFormValues, reduxForm} from "redux-form";
import {CreateDocumentTask} from "../create/CreateDocumentTask";

export class UploadDocumentForm extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {label} = this.props;
        return (
            <div>
                <h1>{I18n.t("application.label.uploadDocument")}</h1>
            </div>
        );
    }

}

UploadDocumentForm.propTypes = {
    label: PropTypes.string.isRequired
}
const selector = getFormValues("AppForm");

function mapStateToProps(state) {
    return {
        formValues: selector(state)
    }
}
export default connect(mapStateToProps)
(reduxForm({
    form: "AppForm",
    destroyOnUnmount: true,
})(UploadDocumentForm));
