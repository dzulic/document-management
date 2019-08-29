import React from 'react';
import {connect} from "react-redux";
import WaitModalDialog from "./WaitModalDialog";
import AddNewItemModal from "./AddNewItemModal";

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
    }

    render() {
        const {
            modalDialog: {
                showModal, addItem, showWaitingModal, waiting
            }
        } = this.props;
        console.log("TH", this.props)
        const content =
            showModal && (
            showWaitingModal && <WaitModalDialog showModal={showModal} message={waiting.message}/>
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