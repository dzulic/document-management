import React, {Component} from 'react';
import CreateTemplateForm from "./CreateTemplateForm";
import {connect} from "react-redux";
import {getFormValues, reduxForm} from "redux-form";
import {ButtonComponent} from "../../../components/integral/ButtonComponent";
import {createTemplateDocument, openAddItemModal, showErrorDialog} from "../../../actions/actions";
import {USER_LOGGED_SESSION} from "../../../utils/Constants";

export class CreateTemplateTask extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.addNewRow = this.addNewRow.bind(this);
    }

    addNewRow() {
        this.props.dispatch(openAddItemModal(true));
    }

    onSubmit() {
        const {dispatch, user, formValues} = this.props;
        console.log(formValues);
        if (formValues==undefined  || formValues.fileName==undefined) {
            this.props.dispatch(showErrorDialog("pleaseFillInTemplateName"));
        } else {
        dispatch(createTemplateDocument({
            data: document.getElementsByClassName("document-form")[0].innerHTML,
            createdBy: user,
            fileName: formValues.fileName,
            contentType: "docx",
        }))
    }
    }

    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <CreateTemplateForm/>
                <div className="col-lg-2">
                    <ButtonComponent label="addNewItem" buttonType="button" click={this.addNewRow}/>
                    <ButtonComponent label="createTemplate" buttonType="submit"/>
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
    destroyOnUnmount: true,
})(CreateTemplateTask));