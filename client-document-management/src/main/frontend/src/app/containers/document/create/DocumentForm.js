import React, {Component} from 'react';
import {TextInputComponent} from "../../../components/integral/TextInputComponent";
import {Field} from "redux-form";

export class DocumentForm extends Component {

    constructor(props) {
        super(props);
        state:{
        }
    }


    render() {
        const {children} = this.props;
        return (
            <div id="container" className="document-form">
                <div className="row col-lg-4 offset-4">
                    <Field component={TextInputComponent} name="docTitle" placeholder="Document Title"/>
                </div>
                <div className="row">
                    {children}
                </div>
            </div>
        );
    }

}

DocumentForm.propTypes = {}
export default (DocumentForm);