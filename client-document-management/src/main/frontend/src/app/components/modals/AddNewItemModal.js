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
        required: false,
    }
};
const buttonOptions = {
    selectOptions: [
        {label: 'Text Input', value: 'INPUT'},
        {label: 'Title', value: 'TITLE'},
        {label: 'Drop Down', value: 'DROP_DOWN'},
        {label: 'Break', value: 'BREAK'},

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
        let name;
        if (formValuesItem && formValuesItem.componentType == 'BREAK') {
            name = 'break';
        } else {
            name = 'label' + (items == null ? 1 : items.length + 1);
        }
        if (formValuesItem[name] !== undefined || name == 'break') {
            let it = items == null ? [] : JSON.parse(
                JSON.stringify(items)
            );
            it.push({
                id: it.length,
                type: formValuesItem.componentType,
                label: formValuesItem[name],
                options: formValuesItem.options
            });
            dispatch({
                type: 'ADD_EDIT_APP_PROP_STORE',
                payload: {
                    key: DOCUMENT_ITEMS,
                    value: it
                },
            })
            ;
            this.props.dispatch(closeItemModal());
        }
    }

    handleClose() {
        this.props.dispatch(closeItemModal());
    }

    render() {
        const {formValuesItem, items} = this.props;
        let length = items == null ? 1 : items.length + 1;
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
                                       component={DropDownComponent}
                                       required={true}/>
                                {formValuesItem != undefined && formValuesItem.componentType == 'DROP_DOWN' &&
                                <p>Insert options, separated by ','</p>
                                }
                                {formValuesItem != undefined && formValuesItem.componentType == 'DROP_DOWN' &&
                                <Field name="options"
                                       label="options"
                                       component={TextInputComponent}/>
                                }
                                {formValuesItem != undefined && formValuesItem.componentType !== 'BREAK' &&
                                <Field name={'label' + length}
                                       label={'label'}
                                       component={TextInputComponent}
                                       required={true}/>
                                }
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
const selectorItem = getFormValues("AppForm");

function mapStateToProps(state) {
    return {
        formValuesItem: selectorItem(state),
        items: getValueAppPropertyStore(state, DOCUMENT_ITEMS),
    }
}

export default connect(mapStateToProps)(reduxForm({
    form: "AppForm",
    destroyOnUnmount: true,
})(AddNewItemModal));