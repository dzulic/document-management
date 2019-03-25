import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Field} from "redux-form";
import {TextInputComponent} from "../../../components/integral/TextInputComponent";

export class DocumentItemForm extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {type, label, options} = this.props;
        let typeInput = type !== undefined && type != "" && type == "INPUT";
        let typeDate = type !== undefined && type != "" && type == "DATE";
        let typeDropDown = type !== undefined && type != "" && type == "DROP_DOWN";
        let typeTitle = type !== undefined && type != "" && type == "TITLE";
        return (
            <div id="document-item">
                <div className="row">
                    {typeInput && <Field name={label}
                                         label={label}
                                         component={TextInputComponent}/>}

                    {typeDate && <Field name="username"
                                        label="username"
                                        component={TextInputComponent}/>}

                    {typeDropDown && <Field name="username"
                                            label="username"
                                            component={TextInputComponent}/>}

                    {typeTitle && <Field name="username"
                                         label="username"
                                         component={TextInputComponent}/>}
                </div>
            </div>
        );
    }

}

DocumentItemForm.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    options: PropTypes.object
}
export default (DocumentItemForm);