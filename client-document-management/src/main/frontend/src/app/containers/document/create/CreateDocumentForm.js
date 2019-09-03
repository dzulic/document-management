import React, {Component} from 'react';
import {DocumentForm} from "./DocumentForm";
import {DocumentItemForm} from "./DocumentItemForm";
import {connect} from "react-redux";
import {getFormValues, reduxForm} from "redux-form";
import {openAddItemModal} from "../../../actions/actions";
import {getValueAppPropertyStore} from "../../../utils/storeUtil";
import {DOCUMENT_ITEMS} from "../../../utils/Constants";
import {I18n} from "react-redux-i18n";

export class CreateDocumentForm extends Component {

    constructor(props) {
        super(props);
        this.addNewRow = this.addNewRow.bind(this);
    }

    addNewRow() {
        this.props.dispatch(openAddItemModal());
    }

    render() {
        const {items} = this.props;
        return (
            <div className="col-lg-12 template">
                <h1>{I18n.t("application.message.createDocument")}</h1>
                <div className="col-lg-8 offset-lg-2">
                    <DocumentForm>
                        {
                            items != null && items.map((item) => (
                                <DocumentItemForm key={item.id} label={item.label} type={item.type}
                                                  options={item.options != undefined ? item.options.split(',') : undefined}/>
                            ))
                        }
                    </DocumentForm>
                </div>
            </div>

        );
    }

}

CreateDocumentForm.propTypes = {}
const selector = getFormValues("AppForm");

function mapStateToProps(state) {
    return {
        formValues: selector(state),
        items: getValueAppPropertyStore(state, DOCUMENT_ITEMS),
    }
}

export default connect(mapStateToProps)
(reduxForm({
    form: "AppForm",
    destroyOnUnmount: true,
})(CreateDocumentForm));