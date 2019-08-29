import React from 'react';
import {connect} from "react-redux";
import WaitModalDialog from "./WaitModalDialog";
import AddNewItemModal from "./AddNewItemModal";
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
        const {
            modalDialog: {
                showModal, addItem, showWaitingModal,
            }
        } = this.props;
        const content =
            showModal && (
            showWaitingModal && <WaitModalDialog showModal={showWaitingModal}/>
            || addItem && <AddNewItemModal showModal={addItem}/>);
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