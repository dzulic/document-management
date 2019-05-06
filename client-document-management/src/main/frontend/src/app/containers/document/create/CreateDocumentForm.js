import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {DocumentForm} from "./DocumentForm";
import {DocumentItemForm} from "./DocumentItemForm";
import {ButtonComponent} from "../../../components/integral/ButtonComponent";
import {connect} from "react-redux";
import {getFormValues, reduxForm} from "redux-form";
import {openAddItemModal} from "../../../actions/actions";

export class CreateDocumentForm extends Component {

    constructor(props) {
        super(props);
        this.addNewRow = this.addNewRow.bind(this);
        this.state = {
            items: [],
        }
    }

    addNewRow(id, type, label) {
      this.props.dispatch(openAddItemModal())
        console.log("inpt");
        type = "INPUT";
        label = "JUL";
        let it = this.state.items;
        console.log("IT",it.length);
        let i1 = {
            items: it.push(
                {id: it.length, type: type, label: label})
        };
        this.setState(it)
    }

    render() {
        return (
            <div>
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
const selector = getFormValues("AppForm");
const selectorItem = getFormValues("ItemForm");

function mapStateToProps(state) {
    return {
        formValues: selector(state),
        formValuesItem: selectorItem(state),
    }
}

export default connect(mapStateToProps)
(reduxForm({
    form: "AppForm",
    destroyOnUnmount: true,
})(CreateDocumentForm));