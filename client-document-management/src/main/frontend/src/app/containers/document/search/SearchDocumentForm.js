import React, {Component} from 'react';
import {Field} from "redux-form";
import {TextInputComponent} from "../../../components/integral/TextInputComponent";
import ReactTable from 'react-table'
import {ButtonComponent} from "../../../components/integral/ButtonComponent";

const columns = [
    {
        Header: 'Document Name',
        accessor: 'name'
    },
    {
        Header: 'Company',
        accessor: 'company'
    },
    {
        Header: 'Created by',
        accessor: 'user'
    },
    {
        Header: 'Document',
        accessor: 'document',
        Cell: props => <img alt="image" /*src={props.value}*/
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABcSURBVHgB7ZCxCcAgEEWPpLFNnTHSZIKU2SMTZiQHsLD1I4IWZ6FWyn/w4HjNcSdCCJmfXWkX/OANPbSdPbIpCx5o4AHfgV5dYIrZD/SI9iIHzzT/kk9u7YSQZQiu4RUpGUTO8QAAAABJRU5ErkJggg=="/>
    },
];
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
            <div>
                <Field name="searchByName" label="searchByName" component={TextInputComponent}/>
                <Field name="searchByCompany" label="searchByCompany" component={TextInputComponent}/>
                <ButtonComponent label="search" classBtn="search"/>
                <ReactTable data={[{a: 1, b: 2}]}
                            columns={columns}
                            pageSizeOptions={[5, 10]}
                            defaultPageSize={10}/>
                {/*    <h3>Download a random file</h3>
                <button onClick={this.downloadRandomImage} className="upload-btn">Download</button>*/}
            </div>
        );
    }

}

SearchDocumentForm.PropTypes = {}
export default (SearchDocumentForm);