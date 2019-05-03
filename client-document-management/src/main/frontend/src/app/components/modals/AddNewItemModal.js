import React from 'react';
import {Modal} from 'react-bootstrap';
import {Field} from "redux-form";
import {TextInputComponent} from "../integral/TextInputComponent";
import PropTypes from "prop-types";
import DropDownComponent from "../integral/DropDownComponent";

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
    label: "documentType"
};

class AddNewItemModal extends React.Component {
    constructor(props) {
        super(props);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            show: true,
        };
    }

    handleClose() {
        this.setState({show: false});
    }

    handleShow() {
        this.setState({show: true});
    }

    handleSubmit() {
        console.log("SUBMIT");
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.showModal == this.props.showModal) {
            this.handleShow();
        }
    }

    render() {
        return (
            <div className="col-4 offset-4">
                <Modal show={this.state.show}
                       aria-labelledby="contained-modal-title-vcenter"
                       onHide={this.handleClose}
                       centered>
                    <div className="modal-backdrop fade in"></div>
                    <Modal.Header className="modal-default" closeButton>
                        <Modal.Title>Add New Item</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={this.handleSubmit(this.onSubmit)}>
                            <div className="row">
                                <div className="col-md-8 col-md-offset-2">
                                    <Field name="componentType"
                                           label="componentType"
                                           baseComponentConfig={BtnTypeInputProps}
                                           component={DropDownComponent}/>
                                    <Field name="username"
                                           label="username"
                                           component={TextInputComponent}/>
                                </div>
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="col-lg-6 btn-margin text-left">

                        </div>
                        <div className="col-lg-6 btn-margin text-right">

                        </div>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }

}

AddNewItemModal.propTypes = {
    showModal: PropTypes.bool
}
export default AddNewItemModal;