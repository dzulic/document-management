import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {I18n} from "react-redux-i18n";

export class SearchDocumentForm extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {label} = this.props;
        return (
            <div>
                <h1>{I18n.t("application.label.searchDocument")}</h1>
            </div>
        );
    }

}

SearchDocumentForm.PropTypes = {
    label: PropTypes.string.isRequired
}
export default (SearchDocumentForm);