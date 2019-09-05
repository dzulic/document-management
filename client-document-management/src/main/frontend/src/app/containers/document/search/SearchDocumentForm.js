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
import {openTemplate} from "../../../actions/actions";
import CheckboxComponent from "../../../components/integral/CheckboxComponent";

const chkInputProps = {
    data: [{value: true, name: 'Search Template', classname: 'checkbox'}],
    props: {value: true, name: 'Select search'}
};
const chkInputProps1 = {
    data: [{value: false, name: 'Search Documents', classname: 'checkbox'}]
};

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
        this.state = {selected: null}
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
        const {companies, documents, templates} = this.props;
        if (companies) {
            CompanyProps.selectOptions = companies;
        }
        let data = [];
        if (templates) {
            templates.forEach((doc) => {
                data.push({
                    name: doc.fileName,
                    templateId: doc.id
                })
            })
        }
        ;
        if (documents) {
            documents.forEach((doc) => {
                data.push({
                    name: doc.name,
                    company: doc.companyDTO.companyName,
                    user: doc.createdBy.name,
                    document: doc.content,
                    documentId: doc.documentId,
                    templateId: doc.templateId
                })
            });
        }
        return (

            <div>
                <Field name={name} component={CheckboxComponent}
                       label={'check'}
                       baseComponentConfig={chkInputProps1}/>;
                <Field name={name} component={CheckboxComponent}
                       baseComponentConfig={chkInputProps}/>
                <Field name="searchByName" label="searchByName" component={TextInputComponent}/>
                <Field name="searchByCompany" label="searchByCompany" component={DropDownComponent}
                       baseComponentConfig={CompanyProps}
                />
                <ButtonComponent label="search" classBtn="search"/>
                <ReactTable data={data}
                            columns={columns}
                            pageSizeOptions={[5, 10]}
                            defaultPageSize={10}
                            getTrProps={(state, rowInfo) => {
                                if (rowInfo && rowInfo.row) {
                                    return {
                                        onClick: (e) => {
                                            this.setState({
                                                selected: rowInfo.index
                                            });
                                            this.props.dispatch(openTemplate(rowInfo.original));
                                        },
                                        style: {
                                            background: rowInfo.index === this.state.selected ? 'rgb(179, 230, 255)' : 'transparent',
                                        }
                                    }
                                } else {
                                    return {}
                                }
                            }
                            }/>
                {/*    <h3>Download a random file</h3>
                <button onClick={this.downloadRandomImage} className="upload-btn">Download</button>*/}
            </div>
        );
    }

}
function mapStateToProps(state) {
    return {
        companies: getValueAppPropertyStore(state, COMPANIES),
        documents: getValueAppPropertyStore(state, "SEARCHED_DOCUMENT"),
        templates: getValueAppPropertyStore(state, "SEARCHED_TEMPLATES")
    }
}
export default connect(mapStateToProps)
(reduxForm({
    form: "AppForm",
    destroyOnUnmount: false,
})(SearchDocumentForm));