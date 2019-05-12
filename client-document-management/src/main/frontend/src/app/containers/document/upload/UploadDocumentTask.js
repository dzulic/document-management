import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class UploadDocumentTask extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {label} = this.props;
        return (
            <div>
                <UploadDocumentTask/>
            </div>
        );
    }

}

UploadDocumentTask.propTypes = {
    label: PropTypes.string
}
export default (UploadDocumentTask);