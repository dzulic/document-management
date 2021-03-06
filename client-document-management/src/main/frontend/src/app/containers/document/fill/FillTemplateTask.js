import React, {Component} from 'react';
import {connect} from "react-redux";
import {getFormValues, reduxForm} from "redux-form";
import {ButtonComponent} from "../../../components/integral/ButtonComponent";
import {USER_LOGGED_SESSION} from "../../../utils/Constants";
import PropTypes from "prop-types";
import FillTemplateForm from "./FillTemplateForm";
import FillImageForm from "./FillImageForm";
import {showUploadDialog} from "../../../actions/actions";

export class FillTemplateTask extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.goToUpload = this.goToUpload.bind(this);
    }

    goToUpload() {
        const {dispatch, fillDocument} = this.props;
        dispatch(showUploadDialog(fillDocument.id));
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
    componentWillUnmount() {
        var $printSection = document.getElementById("printSection");
        if ($printSection != null) {
            $printSection.innerHTML = "";
        }
    }
    UNSAFE_componentWillMount() {
        var $printSection = document.getElementById("printSection");
        if ($printSection != null) {
            $printSection.innerHTML = "";
        }
    }
    render() {
        const {handleSubmit, fillDocument} = this.props;
        let child;
        if (fillDocument.name !== undefined) {
            child = <FillImageForm image={fillDocument}/>
        } else {
            child = <FillTemplateForm document={fillDocument}/>

        }
        return (
            <div id="printThis">
                <div className="print-content">
                    <div className="container">
                        <form onSubmit={handleSubmit(this.onSubmit)} className="fill-form">
                            {child}
                            <div className="col-lg-2 noPrint">
                                <ButtonComponent label="print" buttonType="submit"/>
                                {fillDocument.name === undefined &&
                                <ButtonComponent label="goToUpload" buttonType="button" click={this.goToUpload}/>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
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
    fillDocument: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object])
};
export default connect(mapStateToProps)
(reduxForm({
    form: "AppForm",
    destroyOnUnmount: false,
})(FillTemplateTask));