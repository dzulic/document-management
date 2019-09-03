import React, {Component} from 'react';
import {Field, getFormValues, reduxForm} from "redux-form";
import {I18n} from 'react-redux-i18n';
import {ButtonComponent} from "../../../components/integral/ButtonComponent";
import {TextInputComponent} from "../../../components/integral/TextInputComponent";
import DropDownComponent from "../../../components/integral/DropDownComponent";
import {USER_LOGGED_SESSION} from "../../../utils/Constants";
import {requiredProps} from "../../../components/modals/AddNewItemModal";
import {saveDocument} from "../../../actions/actions";
import {connect} from "react-redux";


export const CompanyProps = {
    selectOptions: [],
    ...requiredProps,
    label: "company",
    formName: "DocForm",
    disableSingleElementReadOnly: false
};
export class UploadDocumentForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            file: undefined
        };
        this.onFileChange = this.onFileChange.bind(this);
        this.uploadFile = this.uploadFile.bind(this);
        this.readAndPreview = this.readAndPreview.bind(this);
    }
    onFileChange(event) {
        this.setState({
            file: event.target.files[0]
        });
    }

    uploadFile(event) {
        event.preventDefault();
        this.setState({error: '', msg: ''});
        if (!this.state.file) {
            this.setState({error: 'Please upload a file.'})
            return;
        }
        if (this.state.file.size >= 2000000) {
            this.setState({error: 'File size exceeds limit of 2MB.'})
            return;
        }
        var reader = new FileReader();

        if (this.state.file) {
            this.readAndPreview(this.state.file, reader)
        }

        reader.readAsDataURL(this.state.file);


    }

    readAndPreview(file, reader) {
        const {dispatch, formValues, user} = this.props;
        if (/\.(jpe?g|png)$/i.test(file.name)) {

            reader.addEventListener("load", function () {
                dispatch(saveDocument({
                    content: this.result,
                    createdBy: user,
                    name: formValues.nameOfDocument
                }))
                ;
            }, false);
        }
    }

    render() {
        let disabled = this.state.file === undefined;
        CompanyProps.selectOptions.push({
            label: this.props.user.company.companyName,
            value: this.props.user.company.companyId
        });
        return (
            <div className="col-lg-12">
                <div className="file-form">
                    <input ref={(ref) => {
                        this.uploadInput = ref
                    }} type="file" className="file" onChange={e => this.onFileChange(e)}/>
                    <label className="file-label">{I18n.t('application.message.chooseFile')}</label>
                    <Field component={TextInputComponent} name="nameOfDocument" label="nameOfDocument"
                           disabled={disabled}
                           classBtn="upload-btn"
                           required/>
                    <Field component={DropDownComponent} name="companies" label="companies"
                           value={CompanyProps.selectOptions[0]}
                           baseComponentConfig={CompanyProps}/>
                    <div className="upload-file-div">
                        <span className="upload-file"
                              onChange={this.onFileChange}>{I18n.t('application.message.uploadFileText')}
                    </span>
                        <Field component={ButtonComponent} name="uploadDocument" label="uploadDocument"
                               click={this.uploadFile}
                               disabled={disabled}
                               classBtn="upload-btn"
                        />
                    </div>
                </div>
                <h4 style={{color: 'red'}}>{this.state.error}</h4>
                <h4 style={{color: 'green'}}>{this.state.msg}</h4>
            </div>
        )
            ;
    }

}

UploadDocumentForm.propTypes = {}
const selector = getFormValues("DocForm");

function
mapStateToProps(state) {
    return {
        formValues: selector(state),
        user: JSON.parse(localStorage.getItem(USER_LOGGED_SESSION))
    }
}
export default connect(mapStateToProps)
(
    reduxForm({
        form: "DocForm",
        destroyOnUnmount: true,
    })(UploadDocumentForm))
;
