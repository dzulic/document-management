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
                        <Field component={TextInputComponent} name="docTitle" placeholder="Document Title" customClass="text-center"/>
                    </div>
                <div className="col-6 offset-1">
                    {children}
                </div>
            </div>
        );
    }

}

DocumentForm.propTypes = {}
export default (DocumentForm);