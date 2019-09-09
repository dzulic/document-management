import React, {Component} from 'react';
import {change, Field, reduxForm} from "redux-form";
import {TextInputComponent} from "../../../components/integral/TextInputComponent";
import ReactTable from 'react-table'
import {ButtonComponent} from "../../../components/integral/ButtonComponent";
import DropDownComponent from "../../../components/integral/DropDownComponent";
import {requiredProps} from "../../../components/modals/AddNewItemModal";
import {COMPANIES} from "../../../utils/Constants";
import {getValueAppPropertyStore} from "../../../utils/storeUtil";
import {connect} from "react-redux";
import {openDocument, openTemplate} from "../../../actions/actions";
import RadioButtonsComponent from "../../../components/integral/RadioButtonComponent";

const chkInputProps = {
    data: [{value: 'searchByTemplate', label: 'Search by Template'},
        {value: 'searchByDocument', label: 'Search by Document'}],
    props: {onChange: undefined}
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
        this.state = {
            selected: null, checked: undefined
        };
        this.onChange = this.onChange.bind(this);

    }
    onChange(event) {
        if (event.target.value === this.state.checked) {
            return;
        } else {
            let i;
            for (i = 0; i < chkInputProps.data.length; i++) {
                chkInputProps.data[i].checked = chkInputProps.data[i].value === event.target.value;
            }
        }
        this.props.dispatch(change('AppForm', 'searchBy', event.target.value));
        this.setState({checked: event.target.value})

        if (event.target.value === 'searchByTemplate') {
            if (columns.length === 3) {
                columns.pop();
            }
        } else {
            if (columns.length < 3) {
                columns.push({
                    Header: 'Document',
                    accessor: 'document',
                    Cell: props => <img className="document-img" alt="image" src={props.value}/>
                },)
            }
        }

    }

    render() {
        chkInputProps.props.onChange = this.onChange;
        const {companies, documents, templates} = this.props;
        if (companies) {
            CompanyProps.selectOptions = companies;
        }
        let data = [];
        if (templates) {
            templates.forEach((doc) => {
                data.push({
                    name: doc.fileName,
                    templateId: doc.id,
                    user: doc.createdBy.name
                })
            })
        }

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
                <Field name={'searchDocuments'} component={RadioButtonsComponent}
                       baseComponentConfig={chkInputProps}/>
                <Field name="searchByName" label="searchByName" component={TextInputComponent}/>
                <Field name="searchByCompany" label="searchByCompany" component={DropDownComponent}
                       baseComponentConfig={CompanyProps}/>
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
                                            if (this.state.checked === 'searchByDocument') {
                                                this.props.dispatch(openDocument(rowInfo.original));

                                            } else {
                                                this.props.dispatch(openTemplate(rowInfo.original));
                                            }
                                        },
                                        style: {
                                            background: rowInfo.index === this.state.selected ? 'rgb(179, 230, 255)' : 'transparent',
                                        }
                                    }
                                } else {
                                    return {}
                                }
                            }}/>
            </div>
        );
    }

}
function mapStateToProps(state) {
    return {
        companies: JSON.parse(localStorage.getItem(COMPANIES)),
        documents: getValueAppPropertyStore(state, "SEARCHED_DOCUMENT"),
        templates: getValueAppPropertyStore(state, "SEARCHED_TEMPLATES")
    }
}
export default connect(mapStateToProps)
(reduxForm({
    form: "AppForm",
    destroyOnUnmount: false,
})(SearchDocumentForm));