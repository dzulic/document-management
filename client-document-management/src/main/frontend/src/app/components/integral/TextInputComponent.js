import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FormControl} from "react-bootstrap";
import {I18n} from "react-redux-i18n";

export class TextInputComponent extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);

    }

    handleKeyPress(e) {
        //this should prevent space values on beginning of string
        const keyCode = e.which || e.keyCode || e.charCode;
        if (keyCode === 32 && e.target.selectionStart === 0) {
            e.preventDefault();
        }
    }

    onChange(event) {
        /* const {baseComponentConfig: {props: {onChange}, decorateOnChange}} = this.props;
         onChange(event.target.value);
         if (decorateOnChange !== undefined) {
             decorateOnChange(event);
         }*/

    }

    render() {
        const {label, customClass, input, placeholder, required, maxlength, minLength} = this.props;
        return (
            <div className="text-input-component">
                <div className="form-group">
                    <FormControl id={label} type="text"
                                 required={required}
                                 spellCheck="false"
                                 autoComplete="off"
                                 name={label}
                                 placeholder={placeholder}
                                 className={customClass}
                                 maxlength={maxlength}
                                 minLength={minLength}
                                 {...input}/>
                    {label && <label htmlFor={label}>{I18n.t("application.message." + label)}</label>}
                </div>

            </div>
        );
    }

}

TextInputComponent.propTypes = {
    label: PropTypes.string,
    required: PropTypes.bool,
    input: PropTypes.object,
    placeholder: PropTypes.string,
    customClass: PropTypes.string,
    maxlength: PropTypes.number,
    minLength: PropTypes.number
};
export default (TextInputComponent);