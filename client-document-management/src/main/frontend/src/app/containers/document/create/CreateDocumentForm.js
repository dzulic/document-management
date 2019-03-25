import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {DocumentForm} from "./DocumentForm";
import {DocumentItemForm} from "./DocumentItemForm";
import {ButtonComponent} from "../../../components/integral/ButtonComponent";
import {connect} from "react-redux";
import {reduxForm} from "redux-form";
import {LoginForm} from "../../login/LoginForm";

export class CreateDocumentForm extends Component {

    constructor(props) {
        super(props);
        this.addNewRow.bind = this.addNewRow.bind(this);

    }

    addNewRow(id, type, label) {
        this.setState(this.state.concat([
            {id: id, type: type, label: label}
        ]))
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-2">
                        <DocumentForm>
                            {
                                this.state != null && this.state.map((item) => (
                                    <DocumentItemForm key={item.id} label={item.label} type={item.type}/>
                                ))
                            }
                        </DocumentForm>
                    </div>
                    <div className="col-lg-2">
                        <ButtonComponent label="Add new item" click={this.addNewRow}/>
                    </div>

                </div>
            </div>
        );
    }

}

CreateDocumentForm.PropTypes = {
    label: PropTypes.string.isRequired
}
export default connect()
(reduxForm({
    form: "AppForm",
    destroyOnUnmount: true,
})(CreateDocumentForm));