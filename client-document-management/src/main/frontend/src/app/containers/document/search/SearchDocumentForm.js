import React, {Component} from 'react';
import {Field} from "redux-form";
import {TextInputComponent} from "../../../components/integral/TextInputComponent";

export class SearchDocumentForm extends Component {

    constructor(props) {
        super(props);
    }
    downloadRandomImage() {
        fetch('http://localhost:10700/api/files')
            .then(response => {
                const filename = response.headers.get('Content-Disposition').split('filename=')[1];
                response.blob().then(blob => {
                    let url = window.URL.createObjectURL(blob);
                    let a = document.createElement('a');
                    a.href = url;
                    a.download = filename;
                    a.click();
                });
            });
    }
    render() {
        return (
            <form>
                <Field name="searchByName" label="searchByName" component={TextInputComponent}/>
                <Field name="searchByCompany" label="searchByCompany" component={TextInputComponent}/>
                <h3>Download a random file</h3>
                <button onClick={this.downloadRandomImage} className="upload-btn">Download</button>
            </form>
        );
    }

}

SearchDocumentForm.PropTypes = {}
export default (SearchDocumentForm);