import React, {Component} from 'react';
import {connect} from "react-redux";
import {Field, getFormValues, reduxForm} from "redux-form";
import {I18n} from 'react-redux-i18n';
import {ButtonComponent} from "../../../components/integral/ButtonComponent";

export class UploadDocumentForm extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.onFileChange = this.onFileChange.bind(this);
        this.uploadFile = this.uploadFile.bind(this);
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
        let data = new FormData();
        data.append('file', this.state.file);
        data.append('name', this.state.file.name);
        fetch('http://localhost:10700/api/files', {
            method: 'POST',
            body: data
        }).then(response => {
            console.log("SUCCESS")
            this.setState({error: '', msg: 'Sucessfully uploaded file'});
        }).catch(err => {
            console.log("ERROR", err)
            this.setState({error: err});
        });
    }
    render() {
        return (
            <div className="col-lg-12">
                <div className="file">
                    <span className="upload-file"
                          onChange={this.onFileChange}>{I18n.t('application.message.uploadFileText')}
                    </span>
                    <Field component={ButtonComponent} label="Upload document" click={this.uploadFile}
                           classBtn="upload-btn"/>
                </div>
                <h4 style={{color: 'red'}}>{this.state.error}</h4>
                <h4 style={{color: 'green'}}>{this.state.msg}</h4>
            </div>
        );
    }

}

UploadDocumentForm.propTypes = {}
const selector = getFormValues(" AppForm");

function mapStateToProps(state) {
    return {
        formValues: selector(state)
    }
}
export default connect(mapStateToProps)
(reduxForm({
    form: " AppForm",
    destroyOnUnmount: true,
})(UploadDocumentForm));
