import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CreateDocumentForm from "../../document/create/CreateDocumentForm";

export class CreateDocumentTask extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="container">
                <CreateDocumentForm/>
            </div>
        );
    }

}

CreateDocumentTask.propTypes = {
    label: PropTypes.string.isRequired
}
export default (CreateDocumentTask);