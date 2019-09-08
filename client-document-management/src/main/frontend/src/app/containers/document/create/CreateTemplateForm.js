import React, {Component} from 'react';
import {TemplateForm} from "./TemplateForm";
import {TemplateItemForm} from "./TemplateItemForm";
import {connect} from "react-redux";
import {Field, getFormValues, reduxForm} from "redux-form";
import {getValueAppPropertyStore} from "../../../utils/storeUtil";
import {DOCUMENT_ITEMS} from "../../../utils/Constants";
import {I18n} from "react-redux-i18n";
import {TextInputComponent} from "../../../components/integral/TextInputComponent";

export class CreateTemplateForm extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {items} = this.props;
        return (
            <div className="col-lg-12 template">
                <h1>{I18n.t("application.message.createDocument")}</h1>
                <Field component={TextInputComponent} label={"fileName"} name={"fileName"}/>
                <div className="col-lg-8 offset-lg-2">
                    <TemplateForm>
                        {
                            items != null && items.map((item) => (
                                <TemplateItemForm key={item.id} label={item.label} type={item.type}
                                                  options={item.options != undefined ? item.options.split(',') : undefined}/>
                            ))
                        }
                    </TemplateForm>
                </div>
            </div>

        );
    }

}

CreateTemplateForm.propTypes = {}
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
    destroyOnUnmount: false,
})(CreateTemplateForm));