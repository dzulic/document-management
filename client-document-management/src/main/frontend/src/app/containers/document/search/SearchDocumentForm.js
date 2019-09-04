import React, {Component} from 'react';
import {Field, reduxForm} from "redux-form";
import {TextInputComponent} from "../../../components/integral/TextInputComponent";
import ReactTable from 'react-table'
import {ButtonComponent} from "../../../components/integral/ButtonComponent";
import DropDownComponent from "../../../components/integral/DropDownComponent";
import {requiredProps} from "../../../components/modals/AddNewItemModal";
import {COMPANIES} from "../../../utils/Constants";
import {getValueAppPropertyStore} from "../../../utils/storeUtil";
import {connect} from "react-redux";

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
        Cell: props => <img className="document-img" alt="image" src={props.value}/>
    },
];

export const CompanyProps = {
    selectOptions: [],
    ...requiredProps,
    label: "companyId",
    formName: "AppForm",
    disableSingleElementReadOnly: true
};
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
        const {companies, documents} = this.props;
        if (companies) {
            CompanyProps.selectOptions = companies;
        }
        console.log("DOC", documents);
        let data = [];
        if (documents) {
            documents.forEach((doc) => {
                data.push({
                    name: doc.name,
                    company: doc.companyDTO.companyName,
                    user: doc.createdBy.name,
                    document: doc.content
                })
            });
        }
        return (

            <div>
                <Field name="searchByName" label="searchByName" component={TextInputComponent}/>
                <Field name="searchByCompany" label="searchByCompany" component={DropDownComponent}
                       baseComponentConfig={CompanyProps}
                />
                <ButtonComponent label="search" classBtn="search"/>
                <ReactTable data={data}
                            columns={columns}
                            pageSizeOptions={[5, 10]}
                            defaultPageSize={10}/>
                {/*    <h3>Download a random file</h3>
                <button onClick={this.downloadRandomImage} className="upload-btn">Download</button>*/}
            </div>
        );
    }

}
function mapStateToProps(state) {
    return {
        companies: getValueAppPropertyStore(state, COMPANIES),
        documents: getValueAppPropertyStore(state, "SEARCHED_DOCUMENT")
    }
}
export default connect(mapStateToProps)
(reduxForm({
    form: "AppForm",
    destroyOnUnmount: false,
})(SearchDocumentForm));