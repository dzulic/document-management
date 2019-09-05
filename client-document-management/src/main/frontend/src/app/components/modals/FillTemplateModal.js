import React from 'react';
import {Modal} from 'react-bootstrap';
import {getFormValues, reduxForm} from "redux-form";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {closeItemModal} from "../../actions/actions";
import FillTemplateTask from "../../containers/document/fill/FillTemplateTask";


class FillTemplateModal extends React.Component {
    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.props.dispatch(closeItemModal());
    }

    render() {
        const {fillDocument, showModal} = this.props;
        return (
            <div className="col-4 offset-4">
                <Modal show={showModal}
                       className="fill-modal"
                       aria-labelledby="contained-modal-title-center"
                       onHide={this.handleClose}
                       centered>
                    <Modal.Header closeButton={true}>
                        <Modal.Title>Fill Document Template and Print</Modal.Title>
                    </Modal.Header>
                    <div className="modal-backdrop fade in"></div>
                    <Modal.Body>
                        <div className="container">
                            <FillTemplateTask fillDocument={fillDocument}/>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }

}

FillTemplateModal.propTypes = {
    showModal: PropTypes.bool,
    fillDocument: PropTypes.object
};
const selectorItem = getFormValues("AppForm");

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps)(reduxForm({
    form: "AppForm",
    destroyOnUnmount: false,
})(FillTemplateModal));