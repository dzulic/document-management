import React, {Component} from 'react';
import {TemplateForm} from "./TemplateForm";
import {connect} from "react-redux";
import {Field, getFormValues, reduxForm} from "redux-form";
import {getValueAppPropertyStore} from "../../../utils/storeUtil";
import {DOCUMENT_ITEMS} from "../../../utils/Constants";
import {I18n} from "react-redux-i18n";
import {TextInputComponent} from "../../../components/integral/TextInputComponent";
import TemplateItemForm from "./TemplateItemForm";

export class CreateTemplateForm extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {items} = this.props;
        return (
            <div className="col-lg-12 template">
                <h1>{I18n.t("application.message.createDocument")}</h1>
                <div className="col-lg-8 offset-lg-2">
                    <TemplateForm>
                        {
                            items != null && items.map((item) => {
                                return <TemplateItemForm
                                    key={item.id}
                                    label={item.label}
                                    type={item.type}
                                    options={item.options != undefined ? item.options.split(',') : undefined}
                                />
                            })

                        }
                    </TemplateForm>
                    <Field component={TextInputComponent} label={"fileName"} name={"fileName"}/>
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
    destroyOnUnmount: true,
})(CreateTemplateForm));