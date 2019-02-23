import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class SearchDocumentForm extends Component {

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

SearchDocumentForm.PropTypes = {
    label: PropTypes.string.isRequired
}
export default (SearchDocumentForm);