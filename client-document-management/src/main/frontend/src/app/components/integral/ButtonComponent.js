import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class ButtonComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button>this.props.label</button>
            </div>
        );
    }

}
ButtonComponent.PropTypes = {
    label: PropTypes.string.isRequired
}
export default (ButtonComponent);