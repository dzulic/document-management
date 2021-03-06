import {closeItemModal} from "../../actions/actions";
import {Modal} from "react-bootstrap";
import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

class ShowSuccessModal extends React.Component {

    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.props.dispatch(closeItemModal());
    }

    render() {
        const {msg} = this.props;
        return (
            <Modal show={msg !== undefined}
                   centered>
                <Modal.Header className="modal-header-red">
                    <button onClick={this.handleClose}
                            type={"button"}
                            style={{
                                'zIndex': '1670',
                                background: 'transparent',
                                border: 'none',
                                fontSize: '25px'
                            }}>&times;
                    </button>
                </Modal.Header>

                <Modal.Body>
                    {msg}
                </Modal.Body>

                <Modal.Footer>
                </Modal.Footer>

            </Modal>
        );
    }

}

ShowSuccessModal.propTypes = {
    msg: PropTypes.string,
};

export default connect()(ShowSuccessModal);