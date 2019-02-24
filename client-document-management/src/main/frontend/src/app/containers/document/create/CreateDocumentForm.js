import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class CreateDocumentForm extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
           <div></div>
        );
    }

}

CreateDocumentForm.PropTypes = {
    label: PropTypes.string.isRequired
}
export default (CreateDocumentForm);