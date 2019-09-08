import React, {Component} from 'react';
import {connect} from "react-redux";
import {getFormValues, reduxForm} from "redux-form";
import {getValueAppPropertyStore} from "../../../utils/storeUtil";
import {DOCUMENT_ITEMS} from "../../../utils/Constants";
import PropTypes from "prop-types";

export class FillTemplateForm extends Component {

    constructor(props) {
        super(props);
    }
    createMarkup(data) {
        return {__html: data};
    };
    render() {
        const {document} = this.props;
        return (
            <div className="col-12">
                <div dangerouslySetInnerHTML={this.createMarkup(document.data)}/>
            </div>
        );
    }

}

FillTemplateForm.propTypes = {
    document: PropTypes.string
};
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
})(FillTemplateForm));