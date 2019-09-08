/**
 * @author krsticn on 06/03/2017.
 */

import React from "react";
import PropTypes from 'prop-types';
import {Modal} from "react-bootstrap";
import {Translate} from 'react-redux-i18n';
import {closeItemModal} from "../../actions/actions";
import {connect} from "react-redux";


const closeBtnBaseComponentConfig = {
    props: {bsClass: "close"}
};

export class ErrorModalDialog extends React.Component {

    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.props.dispatch(closeItemModal());
    }

    render() {
        const {message, messageBody} = this.props;

        return (
            <div className="col-4 offset-4">
                <Modal show={message !== undefined}
                       aria-labelledby="contained-modal-title-center"
                       centered>
                    <Modal.Header className="modal-header-red">
                        <Modal.Title><Translate value="application.label.error"/></Modal.Title>
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
                        <h4><Translate value={"application.error." + message}/></h4>
                        {messageBody &&
                        <div>
                            <div className={'panel-message'}>
                                <Translate value={"application.error." + messageBody}/>
                            </div>
                        </div>}
                    </Modal.Body>

                    <Modal.Footer>
                    </Modal.Footer>

                </Modal>

            </div>

        );
    }

}

ErrorModalDialog.propTypes = {
    message: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    messageBody: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};

export default connect()(ErrorModalDialog);