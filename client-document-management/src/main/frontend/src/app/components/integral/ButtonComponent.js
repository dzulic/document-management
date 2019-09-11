import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {I18n} from "react-redux-i18n";

export class ButtonComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {label, click, buttonType, classBtn, disabled} = this.props;
        return (
            <div className={"button-component" + (classBtn !== undefined ? " " + classBtn : '')}>
                <button className={"btn " + (classBtn !== undefined ? classBtn : '')} type={buttonType}
                        disabled={disabled}
                        onClick={click}>{I18n.t("application.message." + label)}</button>
            </div>
        );
    }

}

ButtonComponent.propTypes = {
    label: PropTypes.string.isRequired,
    click: PropTypes.func,
    buttonType: PropTypes.string,
    classBtn: PropTypes.string,
    disabled: PropTypes.bool
}
export default (ButtonComponent);