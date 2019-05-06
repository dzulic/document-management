import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {I18n} from "react-redux-i18n";

export class ButtonComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {label, click} = this.props;
        return (
            <div id="button-component">
                <button className="btn btn-submit" type="button"
                        onClick={click}>{I18n.t("application." + label)}</button>
            </div>
        );
    }

}

ButtonComponent.propTypes = {
    label: PropTypes.string.isRequired,
    click: PropTypes.func
}
export default (ButtonComponent);