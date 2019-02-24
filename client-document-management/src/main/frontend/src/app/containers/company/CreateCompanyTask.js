import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CreateCompanyForm from "./CreateCompanyForm";

export class CreateCompanyTask extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <CreateCompanyForm/>
            </div>
        );
    }

}


export default (CreateCompanyTask);