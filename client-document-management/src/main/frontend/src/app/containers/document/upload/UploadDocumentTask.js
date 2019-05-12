import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {getFormValues, reduxForm} from "redux-form";

export class UploadDocumentTask extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {label} = this.props;
        return (
            <div>
                <UploadDocumentTask/>
            </div>
        );
    }

}

UploadDocumentTask.propTypes = {
    label: PropTypes.string
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
})(UploadDocumentTask));
