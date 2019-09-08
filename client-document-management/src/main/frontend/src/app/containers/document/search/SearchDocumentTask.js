import React, {Component} from 'react';
import {getFormValues, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {I18n} from "react-redux-i18n";
import {addEditAppProperty, searchDocument, searchTemplate} from "../../../actions/actions";
import SearchDocumentForm from "./SearchDocumentForm";

export class SearchDocumentTask extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onSubmit() {
        const searchedDocument = {
            key: "SEARCHED_TEMPLATES",
            value: null
        };
        const searchedTemplates = {
            key: 'SEARCHED_DOCUMENT',
            value: null
        };
        const {dispatch, formValues} = this.props;
        dispatch(addEditAppProperty(searchedDocument));
        dispatch(addEditAppProperty(searchedTemplates));
        if (formValues.searchBy === 'searchByTemplate') {
            dispatch(searchTemplate(formValues));

        } else if (formValues.searchBy === 'searchByDocument') {
            dispatch(searchDocument(formValues));

        }
    }

    render() {
        const {handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <h1>{I18n.t("application.message.searchDocument")}</h1>
                <SearchDocumentForm/>
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
export default connect(mapStateToProps)
(reduxForm({
    form: "AppForm",
    destroyOnUnmount: false,
})(SearchDocumentTask));
