import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FormControl} from "react-bootstrap";

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
        const {label, input} = this.props;
        return (
            <div id="text-input-component">
                <FormControl type="text" required="required" name={label} {...input}/>
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>{label}</label>
                <div className="bar"></div>
            </div>
        );
    }

}

TextInputComponent.propTypes = {
    input: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired
}
export default (TextInputComponent);