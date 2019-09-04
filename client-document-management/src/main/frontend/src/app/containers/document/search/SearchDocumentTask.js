import React, {Component} from 'react';
import {getFormValues, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {SearchDocumentForm} from "./SearchDocumentForm";
import {I18n} from "react-redux-i18n";

export class SearchDocumentTask extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form>
                <h1>{I18n.t("application.message.searchDocument")}</h1>
                <SearchDocumentForm/>
            </form>
        );
    }

}

SearchDocumentForm.propTypes = {}
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
})(SearchDocumentTask));
