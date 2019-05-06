import React from 'react';
import {Modal} from 'react-bootstrap';
import {Field, getFormValues, reduxForm} from "redux-form";
import {TextInputComponent} from "../integral/TextInputComponent";
import PropTypes from "prop-types";
import DropDownComponent from "../integral/DropDownComponent";
import {ButtonComponent} from "../integral/ButtonComponent";
import {connect} from "react-redux";
import {closeItemModal} from "../../actions/actions";
import {getValueAppPropertyStore} from "../../utils/storeUtil";
import {DOCUMENT_ITEMS} from "../../utils/Constants";

export const requiredProps = {
    props: {
        required: true,
    }
};
const buttonOptions = {
    selectOptions: [
        {label: 'Text Input', value: 'INPUT'},
        {label: 'Title', value: 'TITLE'},
        {label: 'Drop Down', value: 'DROP_DOWN'},
    ]
};
export const BtnTypeInputProps = {
    ...buttonOptions,
    ...requiredProps,
    label: "componentType",
    formName: "ItemForm"
};

class AddNewItemModal extends React.Component {
    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit() {
        const {items, formValuesItem, dispatch} = this.props;
        let it = items == null ? [] : items;
        debugger;
        it.push({id: it.length, type: formValuesItem.componentType, label: formValuesItem.label});
        dispatch({
            type: 'ADD_EDIT_APP_PROP_STORE',
            property: {
                key: DOCUMENT_ITEMS,
                value: it
            },
        })
        ;
        this.props.dispatch(closeItemModal());
    }

    handleClose() {
        this.props.dispatch(closeItemModal());
    }

    render() {
        return (
            <div className="col-4 offset-4">
                <Modal show={this.props.showModal}
                       aria-labelledby="contained-modal-title-center"
                       onHide={this.handleClose}
                       centered>
                    <div className="modal-backdrop fade in"></div>
                    <Modal.Header className="modal-default" closeButton>
                        <Modal.Title>Add New Item</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2">
                                <Field name="componentType"
                                       label="componentType"
                                       baseComponentConfig={BtnTypeInputProps}
                                       component={DropDownComponent}/>
                                <Field name="label"
                                       label="label"
                                       component={TextInputComponent}/>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="col-lg-6 btn-margin text-right">
                            <ButtonComponent label="submit" click={this.handleSubmit}/>
                        </div>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }

}

AddNewItemModal.propTypes = {
    showModal: PropTypes.bool
};
const selectorItem = getFormValues("ItemForm");

function mapStateToProps(state) {
    return {
        formValuesItem: selectorItem(state),
        items: getValueAppPropertyStore(state, DOCUMENT_ITEMS),

    }
}

export default connect(mapStateToProps)(reduxForm({
    form: "ItemForm",
    destroyOnUnmount: true,
})(AddNewItemModal));