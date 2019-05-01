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
            <div className="document-form col-lg-12">
                <div className="row">
                    <div className="col-lg-4 offset-lg-4">
                        <Field component={TextInputComponent} name="docTitle" placeholder="Document Title"/>
                    </div>
                </div>
                <div>
                    {children}
                </div>
            </div>
        );
    }

}

DocumentForm.propTypes = {}
export default (DocumentForm);