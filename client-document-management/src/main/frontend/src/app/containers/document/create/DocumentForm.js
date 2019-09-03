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
            <div className="document-form">
                <div className="col-6 offset-3">
                    <Field component={TextInputComponent} name="docTitle" placeholder="Document Title"
                           customClass="text-center docTitle"/>
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