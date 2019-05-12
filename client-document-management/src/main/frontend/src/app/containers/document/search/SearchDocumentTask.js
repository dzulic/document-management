import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class SearchDocumentForm extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <SearchDocumentForm/>
            </div>
        );
    }

}

SearchDocumentForm.propTypes = {
    label: PropTypes.string.isRequired
}
export default (SearchDocumentForm);