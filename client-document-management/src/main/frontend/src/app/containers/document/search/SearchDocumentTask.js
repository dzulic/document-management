import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {getFormValues, reduxForm} from "redux-form";
import {connect} from "react-redux";

export class SearchDocumentForm extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <SearchDocumentForm/>
            </div>
        );
    }

}

SearchDocumentForm.propTypes = {
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
})(SearchDocumentForm));
