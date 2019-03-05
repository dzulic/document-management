import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class UploadDocumentForm extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {label} = this.props;
        return (
            <div id="button-component">
                <button>{label}</button>
            </div>
        );
    }

}

UploadDocumentForm.PropTypes = {
    label: PropTypes.string.isRequired
}
export default (UploadDocumentForm);