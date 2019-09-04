import React, {Component} from 'react';
import CreateDocumentForm from "../../document/create/CreateDocumentForm";
import {connect} from "react-redux";
import {getFormValues, reduxForm} from "redux-form";
import {ButtonComponent} from "../../../components/integral/ButtonComponent";
import {createTemplateDocument, openAddItemModal} from "../../../actions/actions";
import {USER_LOGGED_SESSION} from "../../../utils/Constants";

export class CreateDocumentTask extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.addNewRow = this.addNewRow.bind(this);
    }

    addNewRow() {
        this.props.dispatch(openAddItemModal(true));
    }
    onSubmit() {
        const {dispatch, user} = this.props;

        dispatch(createTemplateDocument({
            data: document.getElementsByClassName("document-form")[0].innerHTML,
            createdBy: user,
            fileName: "",
            contentType: "docx",
        }))
    }

    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <CreateDocumentForm/>
                <div className="col-lg-2">
                    <ButtonComponent label="addNewItem" buttonType="button" click={this.addNewRow}/>
                    <ButtonComponent label="createDocument" buttonType="submit"/>
                </div>
            </form>
        );
    }

}
const selector = getFormValues("AppForm");

function mapStateToProps(state) {
    return {
        formValues: selector(state),
        user: JSON.parse(localStorage.getItem(USER_LOGGED_SESSION))

    }
}

export default connect(mapStateToProps)
(reduxForm({
    form: "AppForm",
    destroyOnUnmount: false,
})(CreateDocumentTask));