import React, {Component} from 'react';
import {Field, getFormValues, reduxForm} from "redux-form";
import PropTypes from "prop-types";
import {ButtonComponent} from "../../../components/integral/ButtonComponent";
import {connect} from "react-redux";

export class FillImageForm extends Component {

    constructor(props) {
        super(props);
        this.downloadImage = this.downloadImage.bind(this);
    }
    downloadImage() {
        const {image} = this.props;
        let a = document.createElement('a');
        a.href = image.document;
        a.download = image.name;
        a.click();
    };


    render() {
        const {image} = this.props;
        return (
            <div className="col-12">
                <img className="document-img" alt="image" src={image.document}/>
                <Field component={ButtonComponent} click={this.downloadImage} label="download" name="download"
                       buttonType={"button"}/>
            </div>
        );
    }
}

FillImageForm.propTypes = {
    image: PropTypes.object
};
const selector = getFormValues("AppForm");

function
mapStateToProps(state) {
    return {
        formValues: selector(state),
    }
}

export default connect(mapStateToProps)
(
    reduxForm({
        form: "AppForm",
        destroyOnUnmount: false,
    })
    (
        FillImageForm
    ))
;