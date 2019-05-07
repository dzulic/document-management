import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Field} from "redux-form";
import {TextInputComponent} from "../../../components/integral/TextInputComponent";
import DropDownComponent from "../../../components/integral/DropDownComponent";

export class DocumentItemForm extends Component {

    constructor(props) {
        super(props);
    }

    defineOptions(options) {
        let optionArray = [];

        options != undefined ?
            options.forEach(value => {
                optionArray.push({label: value, value: value})
            })
            : optionArray;
        const buttonOptions = {
            selectOptions: [
                ...optionArray
            ]
        };
        return buttonOptions;
    }

    render() {
        const {type, label, options} = this.props;
        let typeInput = type !== undefined && type != "" && type == "INPUT";
        let typeDate = type !== undefined && type != "" && type == "DATE";
        let typeDropDown = type !== undefined && type != "" && type == "DROP_DOWN";
        let typeBreak = type !== undefined && type != "" && type == "BREAK";

        const baseConfigDropDown = {
            ...this.defineOptions(options),
            label: label,
            formName: "AppForm"
        };
        let typeTitle = type !== undefined && type != "" && type == "TITLE";
        return (
            <div id="document-item">
                <div className="row">
                    {typeInput && <Field name={label}
                                         label={label}
                                         component={TextInputComponent}/>}

                    {typeDate && <Field name={label}
                                        label={label}
                                        component={TextInputComponent}/>}

                    {typeDropDown && <Field name={label}
                                            label={label}
                                            baseComponentConfig={baseConfigDropDown}
                                            component={DropDownComponent}/>}

                    {typeTitle && <Field name={label}
                                         label={label}
                                         component={TextInputComponent}/>}
                    {typeBreak && <br/>}
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