import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CreateUserForm from "./CreateUserForm";

export class CreateUserTask extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <CreateUserForm/>
            </div>
        );
    }

}

CreateUserTask.PropTypes = {
    label: PropTypes.string.isRequired
}
export default (CreateUserTask);