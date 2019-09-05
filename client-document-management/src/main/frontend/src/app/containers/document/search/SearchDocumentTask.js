import React, {Component} from 'react';
import {getFormValues, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {I18n} from "react-redux-i18n";
import {searchTemplate} from "../../../actions/actions";
import SearchDocumentForm from "./SearchDocumentForm";

export class SearchDocumentTask extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onSubmit() {
        const {dispatch, formValues} = this.props;
        /*
                dispatch(searchDocument(formValues));
        */
        dispatch(searchTemplate(formValues));
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
