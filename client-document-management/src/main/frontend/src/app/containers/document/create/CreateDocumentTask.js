import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class CreateDocumentTask extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            </div>
        );
    }

}

CreateDocumentTask.PropTypes = {
    label: PropTypes.string.isRequired
}
export default (CreateDocumentTask);