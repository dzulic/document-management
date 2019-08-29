import React from "react";
import {RiseLoader} from "react-spinners";
import {Modal} from "react-bootstrap";
import {I18n} from "react-redux-i18n";


export default class WaitModalDialog extends React.Component {

    render() {
        const {showModal} = this.props;
        return (
            <div className="col-4 offset-4">
                <Modal show={showModal}
                       aria-labelledby="contained-modal-title-center"
                       centered>
                    <div className="modal-backdrop fade in"></div>
                    <Modal.Body>
                        <div className="modal-body loading">
                            <div className='sweet-loading'>
                                <RiseLoader color={'#C0C0C0'} loading={true}/>
                            </div>
                        </div>
                        <div className="waiting-dialog-text">
                            <div>
                                {I18n.t("application.message.pleaseWait")}

                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>

        );
    }

}