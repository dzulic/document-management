import React from 'react';
import AddNewItemModal from "./AddNewItemModal";
import {connect} from "react-redux";

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
                showAddModal, addItem
            }
        } = this.props;

        const content =
            showAddModal &&
            <AddNewItemModal showModal={addItem}/>
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