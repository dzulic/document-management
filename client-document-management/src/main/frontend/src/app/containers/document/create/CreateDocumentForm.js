import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {DocumentForm} from "./DocumentForm";
import {DocumentItemForm} from "./DocumentItemForm";
import {ButtonComponent} from "../../../components/integral/ButtonComponent";
import {connect} from "react-redux";
import {reduxForm} from "redux-form";
import AddNewItemModal from "../../../components/modals/AddNewItemModal";

export class CreateDocumentForm extends Component {

    constructor(props) {
        super(props);
        this.addNewRow = this.addNewRow.bind(this);
        this.state = {
            items: [],
            showModal: false,
        }
    }

    addNewRow(id, type, label) {
        this.setState({
            showModal: true
        });

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
        console.log(this.state.showModal);
        return (
            <div>
                {this.state.showModal && <AddNewItemModal showModal={this.state.showModal}/>}
                <div className="col-lg-12">
                    <h1>Create Document</h1>
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

CreateDocumentForm.propTypes = {
    label: PropTypes.string.isRequired
}
export default connect()
(reduxForm({
    form: "AppForm",
    destroyOnUnmount: true,
})(CreateDocumentForm));