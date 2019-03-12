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
                <input type="text" required="required"/>
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>{label}</label>
                <div className="bar"></div>
            </div>
        );
    }

}

TextInputComponent.propTypes = {
    label: PropTypes.string.isRequired
}
export default (TextInputComponent);