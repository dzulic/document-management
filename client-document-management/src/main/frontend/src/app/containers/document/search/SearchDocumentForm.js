import React, {Component} from 'react';
import {Field} from "redux-form";
import {TextInputComponent} from "../../../components/integral/TextInputComponent";

export class SearchDocumentForm extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form>
                <Field name="searchByName" label="searchByName" component={TextInputComponent}/>
                <Field name="searchByCompany" label="searchByCompany" component={TextInputComponent}/>
            </form>
        );
    }

}

SearchDocumentForm.PropTypes = {}
export default (SearchDocumentForm);