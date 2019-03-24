import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {DocumentForm} from "./DocumentForm";
import {DocumentItemForm} from "./DocumentItemForm";
import {ButtonComponent} from "../../../components/integral/ButtonComponent";

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
                <ButtonComponent label="Add new item" click={this.addNewRow}/>
                <DocumentForm>
                    {
                        this.state.map((item) => (
                            <DocumentItemForm key={item.id} label={item.label} type={item.type}/>
                        ))
                    }
                </DocumentForm>
            </div>
        );
    }

}

CreateDocumentForm.PropTypes = {
    label: PropTypes.string.isRequired
}
export default (CreateDocumentForm);