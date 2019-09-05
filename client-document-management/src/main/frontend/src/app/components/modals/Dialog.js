import React from 'react';
import {connect} from "react-redux";
import WaitModalDialog from "./WaitModalDialog";
import AddNewItemModal from "./AddNewItemModal";
import FillTemplateModal from "./FillTemplateModal";
import {SHOW_WAITING_MODAL} from "../../utils/actionTypes";

class Dialog extends React.Component {
    constructor(props) {
        super(props);
        this.closeModal = this.closeModal.bind(this);
    }

    closeModal() {
        const {dispatch} = this.props;
        dispatch({
            type: 'CLOSE_MODAL_DIALOG'
        });
        dispatch({
            type: SHOW_WAITING_MODAL,
            showWaitingModal: false
        });
    }

    render() {
        console.log(this.props.modalDialog.fillDocument)
        const {
            modalDialog: {
                showModal, addItem, showWaitingModal, fillDocument
            }
        } = this.props;
        const content =
            ((showModal && showWaitingModal) && <WaitModalDialog showModal={showWaitingModal}/>
                || (showModal && addItem) && <AddNewItemModal showModal={addItem}/>
                || (showModal && fillDocument) && <FillTemplateModal showModal={showModal} fillDocument={fillDocument}/>
            )
        ;
        return (
            <div>
                {content}
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        modalDialog: state.modalDialog,
    };
}

export default connect(mapStateToProps)(Dialog);