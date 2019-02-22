import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class TextInputComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {label} = this.props;
        return (
            <div id="text-input-component">
                <div className="row">
                    <label>{label}</label>
                </div>
                <div className="row">
                    <input type="text"/>
                </div>
            </div>
        );
    }

}

TextInputComponent.PropTypes = {
    label: PropTypes.string.isRequired
}
export default (TextInputComponent);