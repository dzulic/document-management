import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {DocumentForm} from "./DocumentForm";
import {DocumentItemForm} from "./DocumentItemForm";
import {ButtonComponent} from "../../../components/integral/ButtonComponent";
import {connect} from "react-redux";
import {reduxForm} from "redux-form";

export class CreateDocumentForm extends Component {

    constructor(props) {
        super(props);
        this.addNewRow = this.addNewRow.bind(this);
        this.state = {
            items: []
        }
    }

    addNewRow(id, type, label) {
        console.log("NES")
        id = "J";
        type = "INPUT";
        label = "JUL";
        let it = this.state.items;
        let i1 = {
            items: it.push(
                {id: id, type: type, label: label})
        };
        this.setState(it)
    }

    render() {
        return (
            <div>
                <div className="col-lg-12">
                    <div className="col-lg-8 offset-lg-2">
                        <DocumentForm>
                            {
                                this.state != null && this.state.items.map((item) => (
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