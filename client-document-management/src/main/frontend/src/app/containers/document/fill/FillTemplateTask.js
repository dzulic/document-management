import React, {Component} from 'react';
import {connect} from "react-redux";
import {getFormValues, reduxForm} from "redux-form";
import {ButtonComponent} from "../../../components/integral/ButtonComponent";
import {USER_LOGGED_SESSION} from "../../../utils/Constants";
import FillTemplateForm from "./FillTemplateForm";
import PropTypes from "prop-types";

export class FillTemplateTask extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }


    onSubmit() {
        this.printElement(document.getElementById("printThis"));
    }

    printElement(elem) {
        var domClone = elem.cloneNode(true);

        var $printSection = document.getElementById("printSection");

        if (!$printSection) {
            var $printSection = document.createElement("div");
            $printSection.id = "printSection";
            document.body.appendChild($printSection);
        }

        $printSection.innerHTML = "";
        $printSection.appendChild(domClone);
        window.print();
    }


    render() {
        const {handleSubmit, fillDocument} = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit)} className="fill-form">
                <FillTemplateForm document={fillDocument}/>
                <div className="col-lg-2">
                    <ButtonComponent label="print" buttonType="submit"/>
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

FillTemplateTask.propTypes = {
    fillDocument: PropTypes.string
};
export default connect(mapStateToProps)
(reduxForm({
    form: "AppForm",
    destroyOnUnmount: false,
})(FillTemplateTask));