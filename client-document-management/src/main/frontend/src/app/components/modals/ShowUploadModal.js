import React from 'react';
import {Modal} from 'react-bootstrap';
import {getFormValues, reduxForm} from "redux-form";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {closeItemModal} from "../../actions/actions";
import UploadDocumentTask from "../../containers/document/upload/UploadDocumentTask";


class ShowUploadModal extends React.Component {
    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.props.dispatch(closeItemModal());
    }

    render() {
        const {templateId} = this.props;
        return (
            <div className="col-4 offset-4">
                <Modal show={true}
                       className="fill-modal"
                       aria-labelledby="contained-modal-title-center"
                       onHide={this.handleClose}
                       centered>
                    <Modal.Header closeButton={true}>
                        <Modal.Title>Upload modal</Modal.Title>
                    </Modal.Header>
                    <div className="modal-backdrop fade in"></div>
                    <Modal.Body>
                        <UploadDocumentTask templateId={templateId}/>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }

}

ShowUploadModal.propTypes = {
    templateId: PropTypes.string
};
const selectorItem = getFormValues("AppForm");

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps)(reduxForm({
    form: "AppForm",
    destroyOnUnmount: false,
})(ShowUploadModal));